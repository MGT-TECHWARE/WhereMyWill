import { connect } from 'cloudflare:sockets';

async function readResponse(reader) {
  const { value } = await reader.read();
  return new TextDecoder().decode(value);
}

async function sendCommand(writer, reader, command) {
  await writer.write(new TextEncoder().encode(command + '\r\n'));
  return await readResponse(reader);
}

async function sendEmail({ to, from, replyTo, subject, body, user, pass }) {
  const socket = connect('smtp.gmail.com:465', { secureTransport: 'on' });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();

  try {
    // Read greeting
    await readResponse(reader);

    // EHLO
    await sendCommand(writer, reader, 'EHLO cloudflare');

    // AUTH LOGIN
    await sendCommand(writer, reader, 'AUTH LOGIN');
    await sendCommand(writer, reader, btoa(user));
    const authResponse = await sendCommand(writer, reader, btoa(pass));

    if (!authResponse.startsWith('235')) {
      throw new Error('Authentication failed');
    }

    // MAIL FROM
    await sendCommand(writer, reader, `MAIL FROM:<${from}>`);

    // RCPT TO
    await sendCommand(writer, reader, `RCPT TO:<${to}>`);

    // DATA
    await sendCommand(writer, reader, 'DATA');

    // Email content
    const message = [
      `From: "Where's The Will Contact" <${from}>`,
      `To: ${to}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      '',
      body,
      '.',
    ].join('\r\n');

    const dataResponse = await sendCommand(writer, reader, message);

    // QUIT
    await sendCommand(writer, reader, 'QUIT');

    return dataResponse.startsWith('250');
  } finally {
    try {
      writer.releaseLock();
      reader.releaseLock();
      socket.close();
    } catch {}
  }
}

export async function onRequestPost(context) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const { name, email, subject, message } = await context.request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers }
      );
    }

    const subjectLabels = {
      general: 'General Inquiry',
      storage: 'Will Storage Questions',
      retrieval: 'Document Retrieval',
      pricing: 'Pricing Information',
    };

    const gmailUser = context.env.GMAIL_USER;
    const gmailPass = context.env.GMAIL_APP_PASSWORD;

    const emailSubject = `New Contact: ${subjectLabels[subject] || subject || 'No Subject'} - from ${name}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subjectLabels[subject] || subject || 'N/A'}\n\nMessage:\n${message}`;

    const success = await sendEmail({
      to: gmailUser,
      from: gmailUser,
      replyTo: email,
      subject: emailSubject,
      body: emailBody,
      user: gmailUser,
      pass: gmailPass,
    });

    if (success) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    } else {
      return new Response(
        JSON.stringify({ error: 'Failed to send email.' }),
        { status: 500, headers }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to send email.' }),
      { status: 500, headers }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

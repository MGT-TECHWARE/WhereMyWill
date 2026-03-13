import React from 'react';
import { clsx } from 'clsx';

const variants = {
  dark: 'bg-primary text-white hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]',
  gold: 'bg-gold text-primary hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(196,163,90,0.4)]',
  outline: 'bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary hover:text-white',
  'outline-dark': 'bg-transparent text-primary border-[1.5px] border-primary/30 hover:bg-primary hover:text-white',
};

const sizes = {
  default: 'px-10 py-5 text-sm',
  lg: 'px-12 py-6 text-base',
  sm: 'px-6 py-3 text-xs',
};

const Button = ({
  children,
  variant = 'dark',
  size = 'default',
  className,
  href,
  onClick,
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-4 font-sans font-medium tracking-wide uppercase no-underline border-none rounded-full cursor-pointer transition-all duration-500 ease-out-expo relative';

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-[18px] h-[18px] transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={clsx(classes, 'group')} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={clsx(classes, 'group')} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;

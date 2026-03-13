import { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsap';

export const useGSAP = (callback, deps = []) => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap, scope.current);
    }, scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
};

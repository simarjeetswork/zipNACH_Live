// utils/afterPaint.ts
export function afterPaint(callback: () => void) {
  let raf1 = 0;
  let raf2 = 0;
  let cancelled = false;

  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(() => {
      if (!cancelled) {
        callback();
      }
    });
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf1);
    cancelAnimationFrame(raf2);
  };
}
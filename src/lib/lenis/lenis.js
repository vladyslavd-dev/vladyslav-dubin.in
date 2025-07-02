import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true,
  normalizeWheel: true,
  gestureOrientation: 'vertical',
});

export default lenis;
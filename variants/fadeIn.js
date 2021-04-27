import easing from './easing';

export default {
  hidden: {
    y: 15,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

import { useInView } from "react-intersection-observer";

// import { useAnimation } from "framer-motion";

export const animationTypes = {
  topBottom: { opacity: 1, y: 0 },
  rightLeft: { opacity: 1, x: 0 },
  visibleOpacity: { opacity: 1 },
  scaleFull: { opacity: 1, scale: 1 },
};

export const useCustomInView = (th) => {
  const { ref, inView, entry } = useInView({
    threshold: th ? th : 0.5,
    triggerOnce: true,
  });

  return [inView, ref, entry];
};

// children animation stagger
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

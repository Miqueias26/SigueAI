import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Models = {
  fadeIn: { opacity: 0, y: 50 },
  scaleIn: { opacity: 0, scale: 0.7 },
  rotateIn: { opacity: 0, rotate: -180 },
  slideLeft: { opacity: 0, x: -100 },
  slideRight: { opacity: 0, x: 100 },
  scrollReveal: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: -50 },
};

const useMotion = ({
  children,
  type = "fadeIn",
  delay = 0,
  scroll = false,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (scroll) {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start(type === "scrollReveal" ? "scrollReveal" : type);
      }
    }
  }, [isInView, controls, scroll, type]);

  return (
    <motion.div
      ref={scroll ? ref : null}
      initial={
        scroll ? (type === "scrollReveal" ? "scrollReveal" : type) : type
      }
      animate={scroll ? controls : "visible"}
      exit="exit"
      variants={Models}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default useMotion;

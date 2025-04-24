import { motion } from "framer-motion";

{
  /*La importacion inclue modulos para animaciones con el Frame-Motion, 
    estructuracion creada para reutilizacion de animaciones //*/
}

{
  /* Constante que almacena los Modelos de animaciones del Motion  */
}
const Models = {
  fadeIn: { opacity: 0, y: 50 },
  scaleIn: { opacity: 0, scale: 0.7 },
  rotateIn: { opacity: 0, rotate: -180 },
  slideLeft: { opacity: 0, x: -100 },
  slideRight: { opacity: 0, x: 100 },
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

{
  /*Exportacion de las animaciones */
}
const useMotion = ({ children, type = "fadeIn", delay = 0 }) => {
  return (
    <motion.div
      initial={Models[type]}
      animate="visible"
      exit="exit"
      variants={Models}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default useMotion;

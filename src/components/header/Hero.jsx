import React from "react";
import Images from "../../assets/images/imagedata";

const Hero = () => {
  const { src, title } = Images.image1;
  return (
    <div className=" ">
      <div className="flex justify-center p-5 rounded-2xl">
        <aside className="w-1/5">
          <img src={src} alt={title} />
        </aside>
        <aside className="w-1/5">
          <h2>Llámanos o escríbenos cuando quieras</h2>
          <p>
            Serás escuchado y comprendido, ya as dado el primer paso y has
            llegado hasta aquí. SigueAI es una inteligenciaartificial que
            pretende ayudarte en esta misión, el actode vivir es una increíble
            demostración de coraje.
          </p>
          <a href="">hello</a> <a href="">world</a>
        </aside>
      </div>
    </div>
  );
};

export default Hero;

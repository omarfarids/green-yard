import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Vission = (props: Props) => {
  return (
    <section className="flex flex-col-reverse px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="md:w-3/5 mx-1">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-20">
            Vision
          </h2>
          <p className="font-bold text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            doloremque neque impedit consequuntur, nemo cum ratione, deserunt
            aut necessitatibus fugiat natus veniam dolores reprehenderit officia
            esse, tenetur doloribus cupiditate libero rerum provident
            accusantium aspernatur similique hic! Totam ab animi eveniet impedit
            eaque quo accusamus vitae eum molestias dolores quas maiores quae
            odit quos officia aut modi, doloribus in? Id totam quo nam illum
            laudantium molestiae accusantium reprehenderit quod quam quis,
            accusamus, earum adipisci cupiditate dolorum facilis iure quasi.
            Minima, eius.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Vission;

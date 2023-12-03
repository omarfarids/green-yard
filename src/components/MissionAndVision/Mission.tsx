import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Mission = (props: Props) => {
  return (
    <section className="pragraph__difficulty flex flex-col gap-5 px-3 py-14 md:py-32 gap-5 bg-lightGray justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="xs:w-3/5 mx-1">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-20">
            Mission
          </h2>
          <p className="font-bold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, pariatur, quibusdam mollitia esse quod nobis iure ab
            nostrum perferendis saepe voluptates? Fuga iure, consectetur esse
            animi assumenda numquam aut ut a ea quasi earum repellat molestias?
            Natus unde labore, incidunt itaque repellendus dignissimos minima
            quis quidem? Nihil molestias tenetur suscipit repellat praesentium.
            Quod saepe autem accusantium quam, ut in tenetur sit soluta! Quas
            accusantium corporis provident debitis accusamus aperiam ducimus,
            minus assumenda, consectetur aliquid qui reprehenderit corrupti quos
            vel? Distinctio?
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Mission;

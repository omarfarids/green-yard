import React from "react";
import Fade from "react-reveal/Fade";
import TextInput from "../components/shared/TextInput";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section className="flex flex-col gap-5 px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="w-full md:w-3/5 mx-1 bg-lightGray py-10 pb-20 rounded-2xl shadow-lg">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-36">
            Contact us
          </h2>
          <div className="flex flex-col gap-4 md:w-2/3 mx-auto px-2">
            <TextInput label="Name" placeholder="Enter your name" />
            <TextInput label="Email" placeholder="Enter your email" />
            <TextInput label="Phone number" placeholder="Enter your phone" />
            <TextInput
              label="Message"
              placeholder="Enter your Message"
              className="h-32"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ContactUs;

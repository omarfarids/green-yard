import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 15, duration: 2 });
  useCountUp({ ref: "freelanceHours", end: 171, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 96, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 53, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={
            <span className="text-5xl font-semibold" id="experienceCounter" />
          }
          measurement="+"
        />

        <CounterItem
          title="Number of Clients"
          counter={
            <span className="text-5xl font-semibold" id="freelanceHours" />
          }
          measurement="+"
        />

        <CounterItem
          title="Positive feedback"
          counter={
            <span className="text-5xl font-semibold" id="feedbackCounter" />
          }
          measurement="%"
        />

        <CounterItem
          title="Projects completed"
          counter={
            <span className="text-5xl font-semibold" id="projectsCounter" />
          }
          measurement=""
        />
      </div>
    </div>
  );
};

export default AboutCounter;

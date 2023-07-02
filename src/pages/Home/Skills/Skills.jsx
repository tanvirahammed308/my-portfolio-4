import Marquee from "react-fast-marquee";
import html from "../../../../public/img/html.png";
import css from "../../../../public/img/css.png";
import js from "../../../../public/img/JavaScript-logo1.png";
import tailwind from "../../../../public/img/Tailwind-1.png";
import boostrap from "../../../../public/img/bootstrap1.png";
import react from "../../../../public/img/react.png";
import mongodb from "../../../../public/img/mongodb1.png";
const Skills = () => {
  return (
    <div className="mb-10">
      <h1
        className="text-2xl font-bold text-center mb-16 underline
"
      >
        My Skills
      </h1>

      <Marquee>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={html} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">HTML</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={css} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">CSS</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={js} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">JS</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={tailwind} />;
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">TAILWIND</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={boostrap} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">Boostrap</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={react} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">REACT</h2>
          </div>
        </div>
        <div className="ml-24">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={mongodb} />
            </div>
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">MONGODB</h2>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;

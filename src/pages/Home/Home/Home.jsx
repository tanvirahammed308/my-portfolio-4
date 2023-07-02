import About from "../../About/About";

import Contact from "./../../Contact/Contact"
import IntroRight from "../Intro/IntroRight";
import Skills from "../Skills/Skills";
import Portfolio from "../../Portfolio/Portfolio";



const Home = () => {
  return (
    <div>
      <div className="md:flex px-5 mt-10 mb-10 ">
        <div className="md:w-[50%] md:py-24  ">
          <IntroRight></IntroRight>
        </div>

        <div className="md:w-[50%]">



          <img
            src="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
            alt=""
            className="rounded-lg 

"
          />
        </div>
      </div>
      <About></About>
      <Skills></Skills>
     <Portfolio></Portfolio>
      <Contact></Contact>
      
     
    </div>
  );
};

export default Home;

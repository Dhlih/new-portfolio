import { IoCodeSlash } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import AnimatedContent from "./AnimatedContent";

const Projects = () => {
  return (
    <div
      className="text-center max-w-[900px] mx-auto space-y-3 mt-[8rem] px-[2rem] "
      id="projects"
    >
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <h2 className="font-semibold text-4xl">
          My <span className="text-[#3CD98E]">Projects</span>
        </h2>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={400}
        threshold={0.2}
      >
        <p className="opacity-75">Take a look at some of my recent projects.</p>
      </AnimatedContent>

      <div className="flex md:flex-row flex-col justify-between mt-[3rem] space-y-[4rem]">
        {/* starts here */}

        <div className="md:max-w-[48%] w-full ">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="bg-[#1B1B1B] p-6  outline-1 outline-[#424242] rounded-xl overflow-hidden group cursor-pointer">
              <a href="https://ifadyusuf.vercel.app" target="_blank">
                <img
                  src="portfolio.png"
                  className="w-full max-h-[200px] rounded-lg object-cover transition duration-300 group-hover:scale-105 "
                />
              </a>
            </div>
            {/* text */}
            <div className="flex justify-between mt-[2rem] items-center mx-4">
              <div>
                <h3 className="text-left text-2xl font-medium">Portfolio</h3>
                <p className="opacity-80">On Development</p>
              </div>
              <div className="space-x-4">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md">
                  <IoCodeSlash className="text-2xl" />
                </button>
                <button className="bg-[#1B1B1B]  outline-1 outline-[#424242] p-3 rounded-md">
                  <IoOpenOutline className="text-2xl" />
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className="md:max-w-[48%] w-full ">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            delay={400}
            animateOpacity
            scale={1}
            threshold={0.2}
          >
            <div className="bg-[#1B1B1B] p-6 outline-1 outline-[#424242] rounded-xl overflow-hidden group cursor-pointer">
              <a href="https://e-tiketin.vercel.app" target="_blank">
                <img
                  src="e-tiketin.png"
                  className="w-full max-h-[200px] rounded-lg object-cover transition duration-300 group-hover:scale-105 "
                />
              </a>
            </div>
            {/* text */}
            <div className="flex justify-between mt-[2rem] items-center mx-4">
              <div>
                <h3 className="text-left text-2xl font-medium">e-Tiketin</h3>
                <p className="opacity-80">On Development</p>
              </div>
              <div className="space-x-4">
                <button className="bg-[#1B1B1B] outline-1 outline-[#424242] p-3 rounded-md">
                  <IoCodeSlash className="text-2xl" />
                </button>
                <button className="bg-[#1B1B1B]  outline-1 outline-[#424242] p-3 rounded-md">
                  <IoOpenOutline className="text-2xl" />
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
      {/* <button className="w-full rounded-full mt-[3rem] flex justify-center items-center space-x-3 bg-[#1B1B1B] outline-1 outline-[#424242] text-center p-3">
        <span clas>More projects on</span> <IoLogoGithub className="text-xl" />
      </button> */}
    </div>
  );
};

export default Projects;

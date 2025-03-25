import React from "react";
import Marquee from "react-fast-marquee";
import AnimatedContent from "./AnimatedContent";

const Hero = () => {
  const skills = [
    { name: "Express", img: "https://skillicons.dev/icons?i=express" },
    { name: "React", img: "https://skillicons.dev/icons?i=react" },
    { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb" },
    { name: "HTML", img: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", img: "https://skillicons.dev/icons?i=css" },
    { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
    { name: "NodeJS", img: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Python", img: "https://skillicons.dev/icons?i=py" },
    { name: "JavaScript", img: "https://skillicons.dev/icons?i=js" },
  ];

  return (
    <div
      className="text-center h-screen flex flex-col justify-center items-center relative md:px-0 px-[2rem]"
      id="home"
    >
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <p className="text-[#3CD98E] md:mt-[10rem] mt-[7rem]">
          Front End Developer
        </p>
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
        <h1 className="text-6xl font-semibold my-3">Ifad Yusuf</h1>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={800}
        threshold={0.2}
      >
        <p className="md:max-w-[65%] max-w-[85%] text-white opacity-75 mx-auto">
          Crafting responsive websites with seamless experience, elegant design,
          and intuitive interactions.
        </p>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        delay={1000}
        threshold={0.2}
      >
        <button className="rounded-xl px-[2.5rem] py-2 bg-[#3CD98E] text-black mt-[1.5rem] cursor-pointer">
          Hire Me!
        </button>
      </AnimatedContent>

      {/* Marquee Scroll */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        delay={1200}
        scale={1}
        threshold={0.2}
      >
        <div className="relative md:max-w-[800px] max-w-[300px] mx-auto mt-[6rem] overflow-hidden ">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full md:w-40 w-10 bg-[linear-gradient(to_right,rgba(10,10,11,0.7),transparent)] z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full md:w-40 w-10 bg-[linear-gradient(to_left,rgba(10,10,11,0.7),transparent)] z-10 pointer-events-none" />

          <Marquee speed={60} gradient={false} pauseOnHover={false}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 gap-1 mx-1 text-white"
              >
                <img src={skill.img} alt={skill.name} className="w-9 mr-2" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Hero;

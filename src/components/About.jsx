import AnimatedContent from "./AnimatedContent";

const About = () => {
  return (
    <div className="w-full py-2" id="about">
      <div className="text-center max-w-[1000px] mx-auto space-y-6 px-[2rem] md:mt-[6rem] mt-0 ">
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
            About <span className="text-[#3CD98E]">Me</span>
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
          <p className="md:max-w-[70%] w-full mx-auto opacity-75 ">
            My name is Yusuf Fadhlih Firmansyah. I'm currently studying
            Informatics Engineering at Politeknik Negeri Semarang. I have a deep
            passion for technology, particularly in the fields of web
            development and machine learning, I am always eager to learn and
            explore new concepts because there is no enough when it comes to
            learning
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default About;

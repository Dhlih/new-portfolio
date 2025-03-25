import AnimatedContent from "./AnimatedContent";

const Contact = () => {
  return (
    <div
      className="max-w-[800px] mx-auto md:mt-[5rem] mt-[7rem] text-center px-[2rem]"
      id="contact"
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
        <h2 className="font-semibold text-4xl mb-4">
          Contact <span className="text-[#3CD98E]">Me</span>
        </h2>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        delay={400}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <p className="text-center mb-10 opacity-75">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </AnimatedContent>

      {/* Contact Form */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        delay={650}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <div className="w-full space-y-7">
          <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-6">
            <input
              type="text"
              className="bg-[#1B1B1B] border border-[#424242] rounded-lg w-full  py-3 px-4 text-sm placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-[#1B1B1B] border border-[#424242] rounded-lg w-full py-3 px-4 text-sm placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
              placeholder="Email"
            />
          </div>
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        delay={850}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <textarea
          rows={7}
          className="bg-[#1B1B1B] mt-[1.5rem] border border-[#424242] rounded-xl w-full py-3 px-4 text-sm placeholder-[#888] resize-none focus:outline-none focus:ring-2 focus:ring-[#3CD98E]"
          placeholder="Message"
        ></textarea>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        delay={900}
        animateOpacity
        scale={1}
        threshold={0.2}
      >
        <button className="bg-[#3CD98E] mt-[1.5rem] hover:bg-[#2ecf7f] transition-all duration-200 text-black  py-2 px-6 rounded-lg w-full cursor-pointer">
          Send Message
        </button>
      </AnimatedContent>
    </div>
  );
};

export default Contact;

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto md:mt-[7rem] mt-[5rem] px-[2rem]">
      <div className="line bg-[#424242] w-full h-[1px] opacity-60 rounded-full"></div>
      <div className="flex items-center md:justify-between justify-center flex-wrap my-[2rem] space-y-4">
        <p className="opacity-75">© 2025 Ifad Yusuf. All rights reserved.</p>
        {/* social media */}
        <div className="flex space-x-6 opacity-75">
          <a
            href="https://www.linkedin.com/in/yusuf-fadhlih-firmansyah"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/ifad.yusuf/" target="_blank">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://github.com/Dhlih" target="_blank">
            <IoLogoGithub className="text-2xl" />
          </a>
          <a href="#">
            <IoMdMail className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

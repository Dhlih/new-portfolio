import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");
  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div
      className="fixed top-0 left-0 z-50 px-[2rem] w-full"
      style={{ width: "100vw" }}
    >
      <div className="max-w-[380px] mx-auto  rounded-full bg-[#1B1B1B] py-3 md:mt-[1.5rem] mt-[2rem] outline-1 outline-[#424242] ">
        <ul className="md:space-x-7 space-x-5 flex items-center justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsActive(item.name);
                  console.log(isActive);
                }}
                className="cursor-pointer text-sm hover:text-[#3CD98E]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

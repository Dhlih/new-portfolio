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
    <div className="fixed top-0 left-0 right-0 z-10 px-[2rem]">
      <div className="flex justify-center">
        <div className="w-fit max-w-[380px] rounded-full bg-[#1B1B1B]/85 backdrop-blur py-3 mt-8  outline-1 outline-[#424242]">
          <ul className="space-x-7 flex items-center justify-center ">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsActive(item.name);
                  }}
                  className={`cursor-pointer text-sm ${
                    isActive === item.name ? "text-[#3CD98E]" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 h-20 sticky z-10 top-0 transition-all duration-300 ${
        isSticky ? "shadow-lg bg-gradient-to-r from-blue-600 to-purple-700" : ""
      } rounded-b-lg`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide animate-bounce">
          TuanLinh
        </h1>
        <nav className="flex-grow">
          <ul className="flex justify-center text-lg font-semibold space-x-12">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Certificates",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-cyan-400 transition duration-300 transform hover:scale-110"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

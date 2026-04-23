import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/80 backdrop-blur border-b border-white/10">
      <Container>
        <Flex className="items-center justify-between py-4">
          <div>
            <h1 className="text-lg md:text-xl font-semibold cursor-pointer group">
              <span className="bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent transition duration-300 group-hover:from-pink-500 group-hover:to-blue-400">
                Frontend Developer
              </span>
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to={"./"}>Home</Link>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to={"about"}>about</Link>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to={"servics"}>Services</Link>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to={"Projects"}>Projects</Link>
            </li>

            <li className="cursor-pointer hover:text-blue-400 transition">
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>

          <div className="flex justify-center">
            <button className="bg-linear-to-r from-blue-500 to-pink-500 px-5 py-2 rounded-full text-sm font-medium transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
              Hire Me
            </button>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

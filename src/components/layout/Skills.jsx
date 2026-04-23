import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap, SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-[#020617] text-white py-28 relative overflow-hidden">

      
      <div className="absolute w-80 h-80 bg-blue-500 opacity-20 blur-3xl top-0 left-0 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl bottom-0 right-0 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">

       
        <h2 className="text-5xl font-extrabold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text tracking-wide">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mb-14 text-lg">
          Crafting modern, scalable and high-performance web experiences.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          
          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <FaHtml5 className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">HTML</h3>
              <p className="text-gray-400 text-sm">Building clean and structured web layouts.</p>
            </div>
          </div>

         
          <div className="group relative p-[1px] rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <FaCss3Alt className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">CSS</h3>
              <p className="text-gray-400 text-sm">Designing responsive and elegant interfaces.</p>
            </div>
          </div>

          
          <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <SiJavascript className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">JavaScript</h3>
              <p className="text-gray-400 text-sm">Making web apps interactive and dynamic.</p>
            </div>
          </div>

         
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <FaReact className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">React.js</h3>
              <p className="text-gray-400 text-sm">Building scalable and reusable UI systems.</p>
            </div>
          </div>

          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <SiTailwindcss className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">Tailwind CSS</h3>
              <p className="text-gray-400 text-sm">Rapid modern UI development with utility classes.</p>
            </div>
          </div>

          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <SiBootstrap className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">Bootstrap</h3>
              <p className="text-gray-400 text-sm">Quick responsive UI with prebuilt components.</p>
            </div>
          </div>

          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <SiRedux className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">Redux</h3>
              <p className="text-gray-400 text-sm">Centralized and efficient state management.</p>
            </div>
          </div>

          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <FaGitAlt className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">Git</h3>
              <p className="text-gray-400 text-sm">Tracking and managing code efficiently.</p>
            </div>
          </div>

          
          <div className="group relative p-px rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-500">
            <div className="bg-[#0b1220]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-purple-500/30 transition">
              <FaGithub className="text-6xl text-blue-400 mb-5 group-hover:rotate-12 group-hover:scale-125 transition duration-500" />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">GitHub</h3>
              <p className="text-gray-400 text-sm">Showcasing and collaborating on projects.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
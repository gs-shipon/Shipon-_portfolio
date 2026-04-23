import React from "react";

const Project = () => {
  return (
    <div id="project" className="py-20 bg-[#0f172a] text-white">
      <div className="container mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            My recent work and creative projects
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-wrap justify-center gap-10">

          {/* Project 1 */}
          <div className="w-[300px] bg-[#1e293b] rounded-2xl p-4 text-center group 
                          transform transition-all duration-500 hover:-translate-y-3 
                          hover:shadow-2xl hover:shadow-cyan-500/20">

            <div className="overflow-hidden rounded-xl">
              <img
                src="/project1.png"
                alt=""
                className="w-full h-44 object-cover rounded-xl 
                           transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold group-hover:text-cyan-400 transition">
              E-commerce Website
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Responsive online shop with cart system.
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => window.open("https://your-live-link-1.com")}
                className="px-4 py-1.5 bg-cyan-400 text-black rounded-full text-sm hover:bg-cyan-300 transition"
              >
                Live
              </button>

              <button
                onClick={() => window.open("https://github.com/your-username/project1")}
                className="px-4 py-1.5 border border-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
              >
                Code
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-[300px] bg-[#1e293b] rounded-2xl p-4 text-center group 
                          transform transition-all duration-500 hover:-translate-y-3 
                          hover:shadow-2xl hover:shadow-cyan-500/20">

            <div className="overflow-hidden rounded-xl">
              <img
                src="/project2.png"
                alt=""
                className="w-full h-44 object-cover rounded-xl 
                           transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold group-hover:text-cyan-400 transition">
              Portfolio Website
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Clean and modern personal portfolio design.
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => window.open("https://your-live-link-2.com")}
                className="px-4 py-1.5 bg-cyan-400 text-black rounded-full text-sm hover:bg-cyan-300 transition"
              >
                Live
              </button>

              <button
                onClick={() => window.open("https://github.com/your-username/project2")}
                className="px-4 py-1.5 border border-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
              >
                Code
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-[300px] bg-[#1e293b] rounded-2xl p-4 text-center group 
                          transform transition-all duration-500 hover:-translate-y-3 
                          hover:shadow-2xl hover:shadow-cyan-500/20">

            <div className="overflow-hidden rounded-xl">
              <img
                src="/project3.png"
                alt=""
                className="w-full h-44 object-cover rounded-xl 
                           transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold group-hover:text-cyan-400 transition">
              Dashboard UI
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Modern dashboard with analytics UI design.
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => window.open("https://your-live-link-3.com")}
                className="px-4 py-1.5 bg-cyan-400 text-black rounded-full text-sm hover:bg-cyan-300 transition"
              >
                Live
              </button>

              <button
                onClick={() => window.open("https://github.com/gs-shipon")}
                className="px-4 py-1.5 border border-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
              >
                Code
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
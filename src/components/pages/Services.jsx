import React from "react";
import {FaMobileAlt,FaLaptopCode,FaBolt,FaBug,FaPaintBrush, FaDatabase,} from "react-icons/fa";
  
const Services = () => {
  return (
    <div className="bg-[#020617] py-24 text-white">

      <div className="max-w-7xl mx-auto px-4 text-center">

       
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            What I Do
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Frontend development services I provide
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaPaintBrush className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              UI Design
            </h3>

            <p className="text-gray-400 text-sm">
              Clean and modern user interface design.
            </p>
          </div>

          
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaMobileAlt className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              Responsive Design
            </h3>

            <p className="text-gray-400 text-sm">
              Mobile, tablet and desktop friendly layout.
            </p>
          </div>

          
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaLaptopCode className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              React Development
            </h3>

            <p className="text-gray-400 text-sm">
              Fast and scalable React applications.
            </p>
          </div>

          
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaBolt className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              Performance Optimization
            </h3>

            <p className="text-gray-400 text-sm">
              Speed optimized and smooth experience.
            </p>
          </div>

         
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaDatabase className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              API Integration
            </h3>

            <p className="text-gray-400 text-sm">
              Connect frontend with backend APIs.
            </p>
          </div>

          
          <div className="group text-center p-8 rounded-xl bg-[#0f172a] border border-blue-500/20
          hover:-translate-y-3 hover:border-blue-400
          hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
          transition duration-500">

            <FaBug className="text-5xl text-blue-400 mx-auto mb-4
            transition duration-500 group-hover:scale-125 group-hover:rotate-6" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
              Bug Fixing
            </h3>

            <p className="text-gray-400 text-sm">
              Debugging and fixing errors efficiently.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
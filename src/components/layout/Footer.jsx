import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#020617] py-16 text-white border-t border-blue-500/20">

      <div className="max-w-3xl mx-auto px-4 text-center">

        
        <h2 className="text-2xl font-bold mb-3">
          Md <span className="text-blue-400">Shipon</span>
        </h2>

        
        <p className="text-gray-400 mb-6">
          Frontend Developer building clean and modern UI.
        </p>

        
        <ul className="flex justify-center gap-5 mb-6">

          <li
            onClick={() => openLink("https://www.facebook.com/share/1RQ4MzDNzN")}
            className="p-3 rounded-full bg-[#0f172a] border border-blue-500/20
            hover:bg-blue-500 transition
            hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            cursor-pointer"
          >
            <FaFacebookF />
          </li>

          <li
            onClick={() => openLink("https://github.com/yourprofile")}
            className="p-3 rounded-full bg-[#0f172a] border border-blue-500/20
            hover:bg-blue-500 transition
            hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            cursor-pointer"
          >
            <FaGithub />
          </li>

          <li
            onClick={() => openLink("https://linkedin.com/in/yourprofile")}
            className="p-3 rounded-full bg-[#0f172a] border border-blue-500/20
            hover:bg-blue-500 transition
            hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            cursor-pointer"
          >
            <FaLinkedinIn />
          </li>

        </ul>

        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </div>
  );
};

export default Footer;
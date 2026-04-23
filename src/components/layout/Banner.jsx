import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Profile from '/src/assets/Profile.jpg'

const Banner = () => {
  return (
     <div
      id="home"
      className="bg-linear-to-r from-[#0b1220] to-[#111a2e] text-white pt-28 pb-20 overflow-hidden"
    >
      <Container>
        <Flex className="flex-col md:flex-row items-center justify-between gap-10">

         
          <div className="max-w-xl z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                Golam Saklain
              </span>
            </h1>

            <p className="text-gray-400 mt-4">
              I build scalable full-stack applications using React, Node.js,
              Express and MongoDB. I love clean code and fast UI.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-linear-to-r from-blue-500 to-pink-500 px-6 py-2 rounded-full hover:scale-105 transition duration-300">
                View Projects
              </button>

              <button className="border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                Contact Me
              </button>
            </div>
          </div>

          
          <div className="relative flex items-center justify-center">

            
            <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>

           
            <img
              src={Profile}
              alt="Profile"
              className="relative w-64 md:w-80 rounded-full border-4 border-blue-500 shadow-lg"
            />

            
            <div className="absolute top-0 left-0 w-10 h-10 border border-blue-400 rounded-md animate-bounce"></div>
            <div className="absolute bottom-5 right-0 w-8 h-8 border border-pink-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 right-10 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>

          </div>

        </Flex>
      </Container>
    </div>
  )
}

export default Banner
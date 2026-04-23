import Container from "../common/Container";
import Flex from "../common/Flex";
import profile from "../../assets/Profile.jpg"; //

const About = () => {
  return (
    <div
      id="about"
      className="bg-linear-to-r from-[#0b1220] to-[#111a2e] text-white py-20"
    >
      <Container>
        <Flex className="flex-col md:flex-row items-center gap-10">
          
          <div className="md:w-1/3 flex justify-center">
            <img
  src={profile}
  alt="profile"
  className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 transition duration-500 ease-in-out hover:scale-105"
/>
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl ml-auto transition duration-500 ease-in-out hover:translate-x-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>

            <p className="text-gray-400 mb-4">
              I am a passionate Frontend Developer dedicated to crafting
              high-performance, pixel-perfect web experiences. I specialize in
              building scalable applications using React and Tailwind CSS,
              focusing on writing clean, maintainable code and optimizing
              workflows with Vite. I thrive at the intersection of design and
              logic, turning complex challenges into seamless, user-centric
              interfaces that are as fast as they are beautiful.
            </p>

            <p className="text-gray-400 mb-6">
              I focus on building the visual and interactive core of the web. By
              leveraging React for complex logic and Tailwind CSS for modern
              styling, I ensure every project is responsive, accessible, and
              high-performing. My workflow is built around speed and efficiency
              using Vite, allowing me to deliver clean, production-ready code
              that provides a top-tier experience for every user.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105">
              Download CV
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;

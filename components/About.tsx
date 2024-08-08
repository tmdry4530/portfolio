import Image from "next/image";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`section min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-16 transition-all duration-500 ease-in-out ${
        darkMode ? "bg-[#0A101E]" : "bg-[#F0F0F0]"
      }`}
    >
      <h1 className="text-4xl text-yellow-500 mb-24 text-center">About me</h1>
      <div className="w-full md:w-4/5 mx-auto transition-opacity duration-500">
        <div className="flex flex-col xl:flex-row items-center justify-center mb-12">
          {/* <div className="flex justify-center mb-8 xl:mb-0 xl:w-1/3">
            <Image
              src="/profile.jpg"
              alt="Profile"
              className={`transition-all duration-500 ease-in-out rounded-lg shadow-2xl border-2 ${
                darkMode ? "border-white" : "border-black"
              }`}
              width={200}
              height={200}
              layout="intrinsic"
            />
          </div> */}
          <div
            className={`transition-colors duration-500 ml-0 p-6 text-center xl:text-left border rounded-xl h-full text-base md:text-lg ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            최신 웹 개발 기술에 열정을 가지고, 자잘한 것이라도 직접 만들어보는
            것을 즐기는 개발자입니다. <br />
            목표를 위해 달려가는 열정과 탐구심을 바탕으로, 꾸준히 성장하며
            사용자에게 뛰어난 경험을 제공하는 개발자로서 일하고 싶습니다.
          </div>
        </div>
        <div className="skill-container w-full">
          <h2
            className={`text-center text-2xl mb-8 text-yellow-500 transition-colors duration-500 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Skills
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 col-md-12 text-center list-inline mx-auto skill-icon transition-opacity duration-500">
            {[
              { name: "HTML 5", icon: "devicon-html5-plain colored" },
              { name: "CSS", icon: "devicon-css3-plain colored" },
              { name: "Node.js", icon: "devicon-nodejs-plain colored" },
              { name: "React", icon: "devicon-react-original colored" },
              { name: "Typescript", icon: "devicon-typescript-plain colored" },
              {
                name: "Next.js",
                icon: darkMode
                  ? "devicon-nextjs-plain"
                  : "devicon-nextjs-plain colored",
              },
              {
                name: "Solidity",
                icon: darkMode
                  ? "devicon-solidity-plain"
                  : "devicon-solidity-plain colored",
              },
              {
                name: "Hardhat, Ethers.js",
                icon: "devicon-hardhat-plain colored",
              },
              {
                name: "R",
                icon: "devicon-r-plain colored",
              },
              { name: "python", icon: "devicon-python-plain colored" },
            ].map(({ name, icon }) => (
              <li key={name} className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4 transition-colors duration-500"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i
                    className={`${icon} text-6xl transition-colors duration-500`}
                  >
                    <p className="text-base mt-1 transition-colors duration-500">
                      {name}
                    </p>
                  </i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

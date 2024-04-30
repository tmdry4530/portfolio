import Image from "next/image";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="section min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-16 transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#0A101E" : "#F0F0F0" }}
    >
      <h1 className="text-4xl text-yellow-500 mb-24 text-center">About me</h1>
      <div className="w-full md:w-4/5 mx-auto transition-opacity duration-500">
        {" "}
        <div className="flex flex-col xl:flex-row items-center justify-center mb-12">
          <div className="flex justify-center mb-8 xl:mb-0 xl:w-1/3">
            <Image
              src="/profile.jpg"
              alt="Profile"
              className={`rounded-lg shadow-2xl border-2 ${
                darkMode ? "border-white" : "border-black"
              }`}
              width={200}
              height={200}
              layout="intrinsic"
            />
          </div>
          <div
            className={`transition-colors duration-500 ml-0 xl:ml-12 p-6 text-center xl:text-left border rounded-xl h-full xl:w-2/3 text-base md:text-lg ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            저는 새로운 기술을 탐구하고 활용하는 것을 좋아하는 개발자입니다.
            현재 블록체인 및 프론트엔드 분야에서는 지금도 끊임없이 새로운
            기술들이 많이 나오고 있습니다. <br />
            이러한 기술들을 배우고 활용하는 것은 저에게 큰 즐거움을 줍니다.
            또한, 이러한 기술들을 활용하여 사람들에게 도움이 되는 서비스를
            만들어내는 것이 저의 목표입니다.
          </div>
        </div>
        <div className="skill-container w-full">
          <h2
            className={`text-center text-2xl mb-8 text-yellow-500 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Skills
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 col-md-12 text-center list-inline mx-auto skill-icon transition-opacity duration-500">
            {" "}
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
                name: "Hardhat,\nEthers.js",
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

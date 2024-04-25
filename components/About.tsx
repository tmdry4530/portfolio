import Image from "next/image";

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start pt-20 h-screen transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#0A101E" : "#F0F0F0" }}
    >
      <div className="about_container w-3/5 mx-auto">
        <div className="intro_container mb-24">
          <h1 className="text-4xl text-yellow-500 mt-0 mb-32 text-center">
            About me
          </h1>
          <div className="flex justify-center items-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/profile.jpg"
                alt="Profile"
                className={`rounded-lg shadow-2xl border-2 ${
                  darkMode ? "border-white" : "border-black"
                }`}
                width={340}
                height={340}
                layout="intrinsic"
              />
            </div>
            <div
              className={`transition-colors duration-500 ml-40 p-6 text-left border rounded-xl mb-8 h-3/4 ${
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
        </div>

        <div className="skill-container">
          <h2
            className={`text-center text-2xl mt-12 mb-32 text-yellow-500 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4 col-md-12">
            <ul className="flex flex-wrap justify-center gap-4 col-md-12 text-center list-inline mx-auto skill-icon">
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-html5-plain colored text-6xl">
                    <p className="text-base mt-1">HTML 5</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-css3-plain colored m-2 text-5xl">
                    <p className="text-base mt-1">CSS</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-nodejs-plain colored m-2 text-5xl">
                    <p className="text-base mt-1">Node.js</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-react-original colored m-2 text-5xl">
                    <p className="text-base mt-1">React.js</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-typescript-plain colored m-2 text-5xl">
                    <p className="text-base mt-1">Typescript</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i
                    className={
                      darkMode
                        ? "devicon-nextjs-plain m-2 text-5xl"
                        : "devicon-nextjs-plain colored m-2 text-5xl"
                    }
                  >
                    <p className="text-base mt-1">Next.js</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i
                    className={
                      darkMode
                        ? "devicon-solidity-plain m-2 text-5xl"
                        : "devicon-solidity-plain colored m-2 text-5xl"
                    }
                  >
                    <p className="text-base mt-1">Solidity</p>
                  </i>
                </div>
              </li>
              <li className="list-inline-item mx-3">
                <div
                  className="flex flex-col items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg p-4"
                  style={{
                    backgroundColor: darkMode ? "#22222b" : "#bcbcb8",
                  }}
                >
                  <i className="devicon-hardhat-plain colored text-6xl">
                    <p className="text-base mt-1">
                      Hardhat,
                      <br />
                      Ethers.js
                    </p>
                  </i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

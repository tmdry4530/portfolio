import Image from "next/image";
import Link from "next/link";

interface HomeSectionProps {
  darkMode: boolean;
}

const HomeSection = ({ darkMode }: HomeSectionProps) => {
  return (
    <section
      id="home"
      className={`section h-screen flex items-center justify-center transition-all duration-500 ease-in-out ${
        darkMode ? "bg-[#070D1B]" : "bg-white"
      }`}
    >
      <div
        id="HomeContainer"
        className="flex flex-col justify-center items-center px-4 md:px-0"
      >
        <h1 className="text-3xl md:text-6xl text-yellow-500 mb-6 md:mb-10 text-center">
          Hello, I'm Seonggyo
        </h1>
        <div
          className={`text-sm md:text-lg text-center transition-colors duration-500 ease-in-out ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          안녕하세요 프론트엔드 개발자 정승교입니다.
        </div>
        <div id="SNS" className="flex justify-around mt-8 gap-10">
          <a
            href="https://twitter.com/chamdom44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={darkMode ? "/twitter-dark.png" : "/twitter-light.png"}
              alt="Twitter"
              width={44}
              height={44}
            />
          </a>
          <a
            href="https://github.com/tmdry4530"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={darkMode ? "/github-dark.png" : "/github-light.png"}
              alt="Github"
              width={44}
              height={44}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/seonggyo-jung-30a44b250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={darkMode ? "/linkedin-dark.png" : "/linkedin-light.png"}
              alt="Linkedin"
              width={44}
              height={44}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

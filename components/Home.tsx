import Image from "next/image";
import Link from "next/link";

interface HomeSectionProps {
  darkMode: boolean;
}

const HomeSection = ({ darkMode }: HomeSectionProps) => {
  return (
    <section
      id="home"
      className="section h-screen transition-colors duration-500 flex items-center justify-center"
      style={{ backgroundColor: darkMode ? "#070D1B" : "#FFFFFF" }}
    >
      <div
        id="HomeContainer"
        className="flex flex-col justify-center items-center px-4 md:px-0"
      >
        <h1 className="text-3xl md:text-6xl text-yellow-500 mb-6 md:mb-10 text-center">
          Seonggyo Jung
        </h1>
        <div
          className={`text-sm md:text-lg text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          안녕하세요 블록체인 & 프론트엔드 개발자 정승교입니다.
        </div>
        <div id="SNS" className="flex justify-around mt-8">
          <Link href="https://twitter.com" passHref>
            <Image
              src={darkMode ? "/twitter-dark.svg" : "/twitter-light.svg"}
              alt="Twitter"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://github.com" passHref>
            <Image
              src={darkMode ? "/github-dark.svg" : "/github-light.svg"}
              alt="Github"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://linkedin.com" passHref>
            <Image
              src={darkMode ? "/linkedin-dark.svg" : "/linkedin-light.svg"}
              alt="Linkedin"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

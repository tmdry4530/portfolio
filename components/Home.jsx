import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/public/css/style.module.css";

const HomeSection = ({ darkMode }) => {
  const [mainTextVisible, setMainTextVisible] = useState(false);
  const [subTextVisible, setSubTextVisible] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    const mainTextTimer = setTimeout(() => {
      setZIndex(10000);
      setMainTextVisible(true);
    }, 1000);

    const subTextTimer = setTimeout(() => {
      setSubTextVisible(true);
    }, 3500);

    return () => {
      clearTimeout(mainTextTimer);
      clearTimeout(subTextTimer);
    };
  }, []);

  const bgColor = darkMode ? "bg-[#070D1B]" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-black";
  const iconColor = darkMode ? "dark" : "light";

  const snsLinks = [
    {
      href: "https://twitter.com/chamdom44",
      src: `/twitter-${iconColor}.png`,
      alt: "Twitter",
    },
    {
      href: "https://github.com/tmdry4530",
      src: `/github-${iconColor}.png`,
      alt: "Github",
    },
    {
      href: "https://www.linkedin.com/in/seonggyo-jung-30a44b250/",
      src: `/linkedin-${iconColor}.png`,
      alt: "Linkedin",
    },
  ];

  return (
    <section
      id="home"
      className={`section h-screen flex items-center justify-center transition-all duration-500 ease-in-out ${bgColor}`}
    >
      <div className="relative flex flex-col items-center justify-center h-full w-full transition-all duration-500">
        <div
          className={`${styles.mainText} ${
            mainTextVisible ? styles.showText : styles.hiddenText
          } transition-all duration-500`}
          style={{ zIndex: zIndex }}
        >
          <h1 className="text-3xl md:text-6xl text-yellow-500 text-center">
            Hello, I&apos;m Seonggyo
          </h1>
        </div>

        <div
          className={`${styles.subText} ${
            subTextVisible ? styles.showText : styles.hiddenText
          } flex flex-col justify-center items-center px-4 md:px-0 transition-all duration-500`}
        >
          <div
            className={`text-sm md:text-lg text-center transition-opacity duration-500 ease-in-out ${textColor} mb-6`}
          >
            안녕하세요 프론트엔드 개발자 정승교입니다.
          </div>
          <div id="SNS" className="flex justify-center mt-4 gap-6">
            {snsLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.snsIcon} transition-all duration-500`}
              >
                <Image src={src} alt={alt} width={44} height={44} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

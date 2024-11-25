import Image from "next/image";
import { useEffect, useState } from "react";

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
    }, 2500);

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
      href: "https://www.linkedin.com/in/seonggyo-jung-30a44b250",
      src: `/linkedin-${iconColor}.png`,
      alt: "Linkedin",
    },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ease-in-out ${bgColor} py-20`}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 md:px-8">
        <div
          className={`relative text-center mb-8`}
          style={{
            zIndex: zIndex,
            opacity: mainTextVisible ? 1 : 0,
            transform: mainTextVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-yellow-500 mb-4">
            Hello, I&apos;m Seunggyo
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300">
            Frontend Developer
          </h2>
        </div>

        <div
          className={`max-w-2xl text-center transition-all duration-1500 ease-in-out`}
          style={{
            opacity: subTextVisible ? 1 : 0,
            transform: subTextVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
          }}
        >
          <p className={`text-lg md:text-xl ${textColor} mb-8 leading-relaxed`}>
            안녕하세요. 사용자 경험을 중시하는 프론트엔드 개발자 정승교입니다.
            최신 웹 기술과 클린 코드를 추구하며, 지속적인 학습과 성장을 통해 더
            나은 웹 서비스를 만들어가고 있습니다.
          </p>

          <div className="flex justify-center gap-8">
            {snsLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={48}
                  height={48}
                  className="filter hover:brightness-125"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

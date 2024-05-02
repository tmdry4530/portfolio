import React from "react";

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <>
      <footer
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } py-6 flex justify-center items-center w-full border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-4xl px-4">
          <img src="/path/to/logo.svg" alt="Logo" className="w-24" />

          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://chamdom.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Blog icon path assumed as 'icons/blog.svg' */}
              <img src="/icons/blog.svg" alt="Blog" className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm">Copyright © Seonggyo Jung</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

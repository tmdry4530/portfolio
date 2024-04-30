import React from "react";

const cards = [
  {
    name: "Next.js",
    total: "1,000",
    description:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
    footer: "https://nextjs.org/",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {cards.map((card) => (
          <label key={card.name} id={card.name} className="cursor-pointer">
            <input type="checkbox" className="hidden" />
            <div className="card relative perspective-1000 w-75 h-75">
              <div className="front absolute top-0 left-0 right-0 bottom-0 backface-hidden bg-gray-800 rounded-lg p-9 transition duration-600 cursor-pointer transform rotateY-0">
                <header className="flex justify-between items-center h-10 mb-6">
                  <h2 className="text-xl font-medium">{card.name}</h2>
                  <span>more_vert</span>
                </header>
                <var className="text-blue-500">{card.total}</var>
                <h3 className="text-blue-500">{card.description}</h3>
                <h4 className="opacity-60 text-lg">{card.footer}</h4>
              </div>
              <div className="back absolute top-0 left-0 right-0 bottom-0 backface-hidden bg-gray-800 rounded-lg p-9 transition duration-600 cursor-pointer transform rotateY-180">
                <header className="flex justify-between items-center h-10 mb-6">
                  <h2 className="text-xl font-medium">{card.name}</h2>
                  <span>close</span>
                </header>
                <p className="opacity-60 text-lg mt-19">More Information</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Home;

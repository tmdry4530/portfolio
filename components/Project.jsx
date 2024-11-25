import Image from "next/image";
import projects from "@/data/projects.json";
import styles from "@/public/css/style.module.css";
import { useState } from "react";

const ProjectSection = ({ darkMode }) => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (title) => {
    setFlippedCards(
      flippedCards.includes(title)
        ? flippedCards.filter((card) => card !== title)
        : [...flippedCards, title]
    );
  };

  return (
    <section
      id="project"
      className={`${styles.section} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.transitionColors} overflow-y-auto transition-all duration-500 ease-in-out`}
      style={{ backgroundColor: darkMode ? "#0D1117" : "#F0F6FC" }}
    >
      <div className={styles.projectContainer}>
        <h1 className="text-4xl text-yellow-500 mt-24 mb-24 text-center">
          Projects
        </h1>
        <div
          className={`${styles.projectGrid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${styles.projectCard} ${
                !darkMode && styles.lightMode
              }`}
              onClick={() => handleCardClick(project.title)}
            >
              <div
                className={`${styles.project} ${
                  flippedCards.includes(project.title) && styles.flipped
                }`}
              >
                <div className={`${styles.front} ${styles.projectContent}`}>
                  <header className={styles.projectHeader}>
                    <Image
                      src={`/${project.imageUrl}`}
                      alt={project.title}
                      width={500}
                      height={300}
                      layout="responsive"
                      objectFit="cover"
                      priority
                    />
                  </header>
                  <div className={styles.projectInfo}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectSummary}>{project.summary}</p>
                  </div>
                </div>
                <div className={`${styles.back} ${styles.projectContent}`}>
                  <div className={styles.projectInfo}>
                    <h2 className={styles.projectSubtitle}>
                      {project.subtitle}
                    </h2>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

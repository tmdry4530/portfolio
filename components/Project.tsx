// ProjectSection.tsx
import Image from "next/image";
import projects from "@/data/projects.json";
import styles from "@/public/css/style.module.css";
import { useState } from "react";

interface ProjectProps {
  darkMode: boolean;
}

const ProjectSection = ({ darkMode }: ProjectProps) => {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const handleCardClick = (title: string) => {
    const currentIndex = flippedCards.indexOf(title);
    if (currentIndex >= 0) {
      setFlippedCards(flippedCards.filter((card) => card !== title));
    } else {
      setFlippedCards([...flippedCards, title]);
    }
  };

  return (
    <section
      id="project"
      className={`${styles.section} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.transitionColors} ${styles.duration500} overflow-y-auto transition-all duration-500 ease-in-out`}
      style={{ backgroundColor: darkMode ? "#0D1117" : "#F0F6FC" }}
    >
      <div className={styles.projectContainer}>
        <h1 className="text-4xl text-yellow-500 mt-24 mb-24 text-center transition-all duration-500 ease-in-out">
          Projects
        </h1>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              id={project.title}
              className={`${styles.projectCard} ${
                !darkMode ? styles.lightMode : ""
              } ${index >= 4 ? styles.hidden : ""}`}
              onClick={() => handleCardClick(project.title)}
            >
              <div
                className={`${styles.project} ${
                  flippedCards.includes(project.title) ? styles.flipped : ""
                }`}
              >
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    styles.front
                  } ${styles.projectContent} ${
                    !darkMode ? styles.lightMode : ""
                  }`}
                >
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
                    <h2
                      className={styles.projectTitle}
                      style={{ color: darkMode ? "#C9D1D9" : "#1F2937" }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={styles.projectSummary}
                      style={{ color: darkMode ? "#8B949E" : "#4B5563" }}
                    >
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${styles.back} ${styles.projectContent}`}
                  style={{ backgroundColor: darkMode ? "#161B22" : "#FFFFFF" }}
                >
                  <div className={styles.projectInfo}>
                    <div className={styles.projectSubtitleContainer}>
                      <h2
                        className={styles.projectSubtitle}
                        style={{ color: darkMode ? "#C9D1D9" : "#1F2937" }}
                      >
                        {project.subtitle}
                      </h2>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        style={{ color: darkMode ? "#58A6FF" : "#2D63EB" }}
                      >
                        GitHub
                      </a>
                    </div>
                    <p
                      className={styles.projectDescription}
                      style={{ color: darkMode ? "#8B949E" : "#4B5563" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <footer className={styles.projectSkills}>
                    {project.skill.map((skill, index) => (
                      <span
                        key={index}
                        className={`${styles.projectSkill} ${
                          darkMode ? "" : styles.lightMode
                        } ${styles[skill.icon]}`}
                        style={{ color: darkMode ? "#8B949E" : "#4B5563" }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </footer>
                </div>
              </div>
              <input type="checkbox" className={styles.hiddenCheckbox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

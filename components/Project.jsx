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

  const bgColor = darkMode ? "#0D1117" : "#F0F6FC";
  const projectTitleColor = darkMode ? "#C9D1D9" : "#1F2937";
  const projectSummaryColor = darkMode ? "#8B949E" : "#4B5563";
  const projectBackColor = darkMode ? "#161B22" : "#FFFFFF";
  const projectLinkColor = darkMode ? "#58A6FF" : "#2D63EB";

  return (
    <section
      id="project"
      className={`${styles.section} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.transitionColors} overflow-y-auto transition-all duration-500 ease-in-out`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.projectContainer}>
        <h1 className="text-4xl text-yellow-500 mt-24 mb-24 text-center">
          Projects
        </h1>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.projectCard} ${
                !darkMode && styles.lightMode
              } ${
                index >= 4 && styles.hidden
              } transition-all duration-500 ease-in-out`}
              onClick={() => handleCardClick(project.title)}
            >
              <div
                className={`${styles.project} ${
                  flippedCards.includes(project.title) && styles.flipped
                } transition-all duration-500 ease-in-out`}
              >
                <div
                  className={`${styles.front} ${styles.projectContent} ${
                    !darkMode && styles.lightMode
                  } transition-all duration-500 ease-in-out`}
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
                      style={{ color: projectTitleColor }}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={styles.projectSummary}
                      style={{ color: projectSummaryColor }}
                    >
                      {project.summary}
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.back} ${styles.projectContent} transition-all duration-500 ease-in-out`}
                  style={{ backgroundColor: projectBackColor }}
                >
                  <div className={styles.projectInfo}>
                    <div className={styles.projectSubtitleContainer}>
                      <h2
                        className={styles.projectSubtitle}
                        style={{ color: projectTitleColor }}
                      >
                        {project.subtitle}
                      </h2>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        style={{ color: projectLinkColor }}
                      >
                        GitHub
                      </a>
                    </div>
                    <p
                      className={styles.projectDescription}
                      style={{ color: projectSummaryColor }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <footer className={styles.projectSkills}>
                    {project.skill.map((skill, index) => (
                      <span
                        key={index}
                        className={`${styles.projectSkill} ${
                          !darkMode && styles.lightMode
                        } transition-all duration-500 ease-in-out`}
                        style={{ color: projectSummaryColor }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </footer>
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

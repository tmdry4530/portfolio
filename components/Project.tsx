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
      className={`${styles.section} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.transitionColors} ${styles.duration500}`}
      style={{ backgroundColor: darkMode ? "#070D1B" : "#FFFFFF" }}
    >
      <div className={styles.projectContainer}>
        <h1
          className={`${styles.text4xl} ${styles.textYellow500} ${styles.mb24} ${styles.textCenter}`}
        >
          Project
        </h1>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              id={project.title}
              className={`${styles.projectCard} ${
                index >= 4 ? styles.hidden : ""
              }`}
              onClick={() => handleCardClick(project.title)}
            >
              <div
                className={`${styles.project} ${
                  flippedCards.includes(project.title) ? styles.flipped : ""
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
                    <div className={styles.projectSubtitleContainer}>
                      <h2 className={styles.projectSubtitle}>
                        {project.subtitle}
                      </h2>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        GitHub
                      </a>
                    </div>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                  <footer className={styles.projectSkills}>
                    {project.skill.map((skill, index) => (
                      <span
                        key={index}
                        className={`${styles.projectSkill} ${
                          styles[skill.icon]
                        }`}
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

interface ProjectSectionProps {
  darkMode: boolean;
}

const ProjectSection = ({ darkMode }: ProjectSectionProps) => {
  return (
    <section
      id="project"
      className="h-screen transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#070D1B" : "#FFFFFF" }}
    >
      <div className="col-md-12">
        <h1 className="section-title text-4xl text-yellow-500">
          <span>Portfolio</span>
        </h1>
        <div className="col-md-12 mx-auto"></div>
      </div>
    </section>
  );
};

export default ProjectSection;

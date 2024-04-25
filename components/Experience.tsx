interface ExperienceSectionProps {
  darkMode: boolean;
}

const ExperienceSection = ({ darkMode }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="h-screen transition-colors duration-500"
      style={{ backgroundColor: darkMode ? "#0A101E" : "#F0F0F0" }}
    >
      4
    </section>
  );
};

export default ExperienceSection;

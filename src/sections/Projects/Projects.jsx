import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import flashcards from "../../assets/flashcards.png";
import rideshare from "../../assets/rideshare.png";
import bomberman from "../../assets/bomberman.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      {/* <h2 className="sectionDescription">I Build:</h2> */}
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flashcards}
          link="https://github.com/jfishB/Flashcards_AI"
          h3 = "AI Flashcards"
          p = "SaaS product using OpenAI API"
        />
        <ProjectCard
          src={rideshare}
          link="https://devpost.com/software/rideshare-2osvug"
          h3 = "RideShare"
          p = "Community Carpooling Service"
        />
        <ProjectCard
          src={bomberman}
          link="https://www.youtube.com/watch?v=Uqxuo6ajq5U"
          h3 = "Assignment Assassin"
          p = "Origninal Bomberman Recreation"
        />
      </div>
    </section>
  );
}

export default Projects;

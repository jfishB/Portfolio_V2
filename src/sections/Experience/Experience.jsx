import styles from "./ExperienceStyles.module.css";

function Experience() {
  const experiences = [
    {
      role: "Website Developer",
      company: "UofT Machine Intelligence Student Team",
      duration: "Oct 2024 - Present",
      description:
        "Built website with React and Next.js to be used by a community of over 2,200 AI/ML enthusiasts",
    },
    {
      role: "Software Engineer Fellow",
      company: "Headstarter",
      duration: "July 2024 - Sept 2024",
      description:
        "Built 5 projects in 5 weeks using various tools such as React JS, Firebase, Clerk, and Open AI API",
    },
    {
      role: "Executive",
      company: "Markville Web Devlopment Club",
      duration: "Sept 2023 - June 2024",
      description:
        "Taught a class of over 20 students about HTML, CSS, and JavaScript applications",
    },
  ];

  return (
    <section id="experience" className={styles.container}>
      {/* <h2 className="sectionDescription">Some of my Work:</h2> */}
      <h1 className="sectionTitle">experience</h1>
      <div className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

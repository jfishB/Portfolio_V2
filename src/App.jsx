import "./App.css";

function App() {
  return (
    <div>
      <div className="header-row">
        {/* name */}
        <h1>Jeevesh Balendra</h1>
        {/* socials */}
        <div className="socials">
          <a
            href="https://github.com/jfishB"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeevesh0126"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      {/* description */}
      <p className="description">
        Software Engineer based in Toronto, building in the intersection of
        Healthcare and AI. Studying Computer Science at the University of
        Toronto.
        <br />
        <br />
        Currently building at SickKids Hospital.
      </p>
      {/* projects */}
      <div className="projects">{/* <h2>Projects</h2> */}</div>
      {/* experience */}
      <div className="experience">{/* <h2>Experience</h2> */}</div>
    </div>
  );
}

export default App;

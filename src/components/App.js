import React from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "Smart Fitness App",
      description: "A fitness tracker app that customizes workout plans based on user behavior and goals."
    },
    {
      name: "AI Job Matcher",
      description: "An AI-powered platform to match job seekers with their ideal job roles based on skills."
    },
    {
      name: "Eco-Friendly Marketplace",
      description: "A marketplace for sustainable products that helps reduce carbon footprint."
    }
  ];
  return (
    <div id="main">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}

export default App;

import React from "react";
import styles from "./Projects.module.css";

const projects = [
  { name: "Mala Counter", description: "A simple React counter app to track chants.", link: "#" },
  { name: "Weather Dashboard", description: "Shows real-time weather data using APIs.", link: "#" },
  { name: "Tic-Tac-Toe", description: "Classic game built with React.", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h3>Projects</h3>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
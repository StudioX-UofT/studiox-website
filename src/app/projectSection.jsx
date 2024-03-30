"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "/src/app/projectCard.jsx";
import './project-styles.css';


const projectsData = [
  {
    id: 1,
    title: "",
    description: "Project 1 description",
    image: "/projects-pics/project-1.png",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "",
    description: "Project 2 description",
    image: "/projects-pics/project-2.png",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "",
    description: "Project 3 description",
    image: "/projects-pics/project-3.png",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const ref = useRef(null);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-left text-4xl font-bold text-white mt-4 mb-8 md:mb-12 project-title">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-10 project-grid">
        {projectsData.map((project, index) => (
          
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
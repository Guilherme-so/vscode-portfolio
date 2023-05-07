import React from "react";
import { projects } from "@/components/helper/constants";
import { Container, Heading, Works } from "@/styles/projects";
import ProjectCard from "@/components/projectCart";

function Projects() {
  return (
    <Container>
      <Heading>Projects</Heading>
      <br />
      <hr />
      <Works>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </Works>
      <br />
    </Container>
  );
}

export default Projects;

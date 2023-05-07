import React from "react";
import { projects } from "@/components/helper/constants";
import { Container,Heading } from "@/styles/projects";
import ProjectCard from "@/components/projectCart";

function Projects() {
  return (
    <>
      <Heading>Projects</Heading>
      <br />
      <hr />
      <Container>
        {projects.map((project,index) => {
          return (
            <ProjectCard key={index} {...project} />
          );
        })}
      </Container>
      <br />
    </>
  );
}

export default Projects;

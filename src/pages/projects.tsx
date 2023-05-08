import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { projects } from "@/components/helper/constants";
import { Container, Heading, Works } from "@/styles/projects";
import ProjectCard from "@/components/projectCart";
import { enUS, ptBR } from "@/components/helper/internationalization";
import Head from "@/components/helper/head";

function Projects() {
  const router = useRouter();
  const { locale } = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    switch (locale) {
      case "pt-BR":
        router.push("/projects", "/projects", { locale: "pt-BR" });
        break;
      case "en-US":
        router.push("/projects", "/projects", { locale: "en-US" });
        break;
    }
  }, [locale]);

  const translate = locale == "pt-BR" ? ptBR : enUS;

  return (
    <>
      <Head title="Projects" />
      <Container>
        <Heading>{translate.projectsPage.heading}</Heading>
        <br />
        <hr />
        <Works>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Works>
        <br />
      </Container>
    </>
  );
}

export default Projects;

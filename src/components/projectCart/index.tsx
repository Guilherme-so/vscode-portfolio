import Image from "next/image";
import { Container } from "./styled";
import { HandPointing } from "phosphor-react";

interface IProject {
  title: string;
  description: string;
  img: string;
  link: string;
}

const ProjectCard = ({ title, img, description, link }: IProject) => {
  return (
    <Container
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      <div className="imgWrapper">
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
        <HandPointing className="handPonting" size={40} color="white" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags"></div>
        <div className="cta"></div>
      </div>
    </Container>
  );
};

export default ProjectCard;

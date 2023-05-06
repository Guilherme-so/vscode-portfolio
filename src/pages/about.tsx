import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SinglePage from "@/components/pdf/singlePagePDF";

const Resume = "/images/resume.pdf";
import { About } from "../styles/about";

const AboutPage = () => {
  const sidebarWidth = useSelector((state: RootState) => state.files.size);

  return (
    <About size={sidebarWidth}>
      <h3>About Me</h3>
      <br />
      <ul>
        <li>
          <span role="img" aria-label="light-bulb">
            💡
          </span>{" "}
          Open to collaborating on projects and innovative ideas.{" "}
        </li>
        <li>
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          Currently studying fullstack development, Mobile and searching for a
          full time job.{" "}
        </li>
      </ul>
      <br />
      <center>
        <h3>
          Resume (
          <a href={Resume} download="resume_guilherme.pdf">
            Download
          </a>
          )
        </h3>
        <br />
        <SinglePage pdf={Resume} />
      </center>
    </About>
  );
};

export default AboutPage;

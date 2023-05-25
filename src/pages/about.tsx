import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SinglePage from "@/components/pdf/singlePagePDF";

const Resume = "/images/resume.pdf";
const ResumePT = "/images/resume_pt.pdf";

import { About } from "../styles/about";
import { enUS, ptBR } from "@/components/helper/internationalization";
import Head from "@/components/helper/head";

const AboutPage = () => {
  const router = useRouter();
  const sidebarWidth = useSelector((state: RootState) => state.files.size);
  const { locale } = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    switch (locale) {
      case "pt-BR":
        router.push("/about", "/about", { locale: "pt-BR" });
        break;
      case "en-US":
        router.push("/about", "/about", { locale: "en-US" });
        break;
    }
  }, [locale]);

  const translate = locale == "pt-BR" ? ptBR : enUS;

  return (
    <>
      <Head title="About" />

      <About size={sidebarWidth}>
        <h3>{translate.aboutPage.heading}</h3>
        <br />
        <ul>
          <li>
            <span role="img" aria-label="laptop">
              💻
            </span>
            {translate.aboutPage.first}
          </li>
          <li>
            <span role="img" aria-label="light-bulb">
              💡
            </span>
            {translate.aboutPage.second}
          </li>
        </ul>
        <br />
        <center>
          <h3>
            {translate.aboutPage.resume} (
            <a
              href={locale == "pt-BR" ? ResumePT : Resume}
              download="resume_guilherme.pdf"
            >
              Download
            </a>
            )
          </h3>
          <br />
          <SinglePage pdf={locale == "pt-BR" ? ResumePT : Resume} />
        </center>
      </About>
    </>
  );
};

export default AboutPage;

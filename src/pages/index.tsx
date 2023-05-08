import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  Button,
  ButtonsWrapper,
  Card,
  CardContainer,
  Container,
  Content,
  Foreground,
  Outlined,
  PictureBoader,
  Right,
  Tags,
} from "@/styles/Home";
import { enUS, ptBR } from "@/components/helper/internationalization";
import Head from "@/components/helper/head";

export default function HomePage() {
  const router = useRouter();

  const sidebarWidth = useSelector((state: RootState) => state.files.size);
  const { locale } = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    switch (locale) {
      case "pt-BR":
        router.push("/", "/", { locale: "pt-BR" });
        break;
      case "en-US":
        router.push("/", "/", { locale: "en-US" });
        break;
    }
  }, [locale]);

  const translate = locale == "pt-BR" ? ptBR : enUS;

  return (
    <>
    <Head title="Home" />
      <Container size={sidebarWidth}>
        <Foreground size={sidebarWidth}>
          <Content>
            <h1 className="name">Guilherme Silva</h1>
            <h6 className="bio">{translate.homePage.bio}</h6>
            <CardContainer>
              <Card>
                <Content>
                  <h4>Skills</h4>
                  <Tags>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>ReactJS</span>
                    <span>NextJS</span>
                    <span>Redux</span>
                    <span>Redux-Toolkit</span>
                    <span>NodeJS</span>
                    <span>ExpressJS</span>
                    <span>APIs</span>
                    <span>MongoDB</span>
                    <span>SQL</span>
                    <span>Postgres</span>
                    <span>Prisma</span>
                    <span>Dart</span>
                    <span>Flutter</span>
                  </Tags>
                </Content>
              </Card>
            </CardContainer>

            <ButtonsWrapper>
              <Button onClick={() => router.push("/about")}>
                {translate.homePage.firstButton}
              </Button>
              <Outlined onClick={() => router.push("/contact")}>
                {translate.homePage.secondButton}
              </Outlined>
            </ButtonsWrapper>
          </Content>

          <Right>
            <PictureBoader>
              <Image
                className="picture"
                src="https://github.com/Guilherme-so.png"
                width={300}
                height={290}
                alt="Gui's Picture"
              />
            </PictureBoader>
          </Right>
        </Foreground>
      </Container>
    </>
  );
}

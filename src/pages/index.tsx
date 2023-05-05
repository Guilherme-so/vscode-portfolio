import Image from "next/image";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  Background,
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
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const sidebarWidth = useSelector((state: RootState) => state.files.size);

  return (
    <>
      <Container
        // style={{
        //   width: `calc(100vw - ${sidebarWidth}px)`,
        // }}
        size={sidebarWidth}
      >
        <Foreground
          size={sidebarWidth}
          // style={{
          //   width: `calc(100vw - ${sidebarWidth}px - 100px)`,
          // }}
        >
          <Content>
            <h1 className="name">Guilherme Silva</h1>
            <h6 className="bio">Frontend and Mobile developer</h6>
            <CardContainer>
              <Card>
                <Content>
                  <h4>Skill Set</h4>
                  <Tags>
                    <span key="Research" className="Research">
                      Research
                    </span>
                    <span key="PyTorch" className="PyTorch">
                      PyTorch
                    </span>
                    <span key="Tensorflow" className="Tensorflow">
                      Tensorflow
                    </span>
                    <span key="Apache-Spark" className="Apache-Spark">
                      Apache-Spark
                    </span>
                    <span key="SQL" className="SQL">
                      SQL
                    </span>
                    <span key="Computer-Vision" className="Computer-Vision">
                      Computer-Vision
                    </span>
                    <span key="Data-Pipelines" className="Data-Pipelines">
                      Data-Pipelines
                    </span>
                    <span key="MLOps" className="MLOps">
                      MLOps
                    </span>
                    <span key="Software-Design" className="Software-Design">
                      Software-Design
                    </span>
                    <span key="Bots" className="Bots">
                      Bots
                    </span>
                    <span key="APIs" className="APIs">
                      APIs
                    </span>
                  </Tags>
                </Content>
              </Card>
            </CardContainer>

            <ButtonsWrapper>
              <Button onClick={() => router.push("/about")}>About Me</Button>
              <Outlined onClick={() => router.push("/contact")}>
                Contact
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

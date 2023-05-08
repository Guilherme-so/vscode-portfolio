import {
  Card,
  Container,
  ImageContainer,
  ImageWrapper,
} from "@/styles/settings";
import Image from "next/image";
import React from "react";

function Settings() {
  function setBeardedTheme() {
    window.localStorage.setItem("theme", "bearded");
    window.dispatchEvent(new Event("storage"));
  }
  function setDraculaTheme() {
    window.localStorage.setItem("theme", "dracula");
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <Container>
      <h2>Themes</h2>

      <ImageContainer>
        <Card>
          <ImageWrapper>
            <Image src="/images/bearded.png" alt="dracula theme" fill={true} />
          </ImageWrapper>
          <h3>Bearded</h3>
          <h4>Bearded theme</h4>
          <button onClick={() => setBeardedTheme()}>Set theme</button>
        </Card>

        <Card>
          <ImageWrapper>
            <Image src="/images/dracula.png" alt="dracula theme" fill={true} />
          </ImageWrapper>
          <h3>Dracula</h3>
          <h4>Dracula theme</h4>
          <button onClick={() => setDraculaTheme()}>Set theme</button>
        </Card>
      </ImageContainer>
    </Container>
  );
}

export default Settings;

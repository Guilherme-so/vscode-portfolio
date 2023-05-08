import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ChangeOption } from "../redux/features/language/languageSlice";
import {
  Card,
  Container,
  ImageContainer,
  ImageWrapper,
  Language,
} from "@/styles/settings";
import SelectCountry from "@/components/Select";
import { flags } from "@/components/helper/constants";
import Head from "@/components/helper/head";

function Settings() {
  function setBeardedTheme() {
    window.localStorage.setItem("theme", "bearded");
    window.dispatchEvent(new Event("storage"));
  }
  function setDraculaTheme() {
    window.localStorage.setItem("theme", "dracula");
    window.dispatchEvent(new Event("storage"));
  }

  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <>
      <Head title="Settings" />

      <Container>
        <h2>Languages</h2>
        <Language>
          <SelectCountry
            options={flags}
            value={language}
            onChange={(value) => dispatch(ChangeOption(value))}
          />
        </Language>

        <h2>Themes</h2>
        <ImageContainer>
          <Card>
            <ImageWrapper>
              <Image
                src="/images/bearded.png"
                alt="dracula theme"
                fill={true}
              />
            </ImageWrapper>
            <h3>Bearded</h3>
            <h4>Bearded theme</h4>
            <button onClick={() => setBeardedTheme()}>Set theme</button>
          </Card>

          <Card>
            <ImageWrapper>
              <Image
                src="/images/dracula.png"
                alt="dracula theme"
                fill={true}
              />
            </ImageWrapper>
            <h3>Dracula</h3>
            <h4>Dracula theme</h4>
            <button onClick={() => setDraculaTheme()}>Set theme</button>
          </Card>
        </ImageContainer>
      </Container>
    </>
  );
}

export default Settings;

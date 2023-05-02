import React from "react";
import Image from "next/image";
import { MainContainer, SpanContainer, TopBar } from "./style";

function Topbar() {
  return (
    <TopBar>
      <MainContainer>
        <Image
          src={"/images/vscode_icon.svg"}
          alt="vscode"
          height={16}
          width={20}
        />
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </MainContainer>

      <p>Guilherme-portfolio</p>

      <SpanContainer>
        <span></span>
        <span></span>
        <span></span>
      </SpanContainer>
    </TopBar>
  );
}

export default Topbar;

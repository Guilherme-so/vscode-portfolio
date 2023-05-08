import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Top, Bottom, IconContainer } from "./styles";
import { sidebarBottomItems, sidebarTopItems } from "../helper/constants";

function Sidebar() {
  const router = useRouter();

  return (
    <Container>
      <Top>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <IconContainer active={router.pathname === path ? true : false}>
              <Icon className="icon" />
            </IconContainer>
          </Link>
        ))}
      </Top>
      <Bottom>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <IconContainer key={path} activeBotton={router.pathname === path ? true : false}>
            <Link href={path}>
              <Icon className="icon" />
            </Link>
          </IconContainer>
        ))}
      </Bottom>
    </Container>
  );
}

export default Sidebar;

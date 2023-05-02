import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Top, Bottom, IconContainer } from "./styles";
import { sidebarBottomItems, sidebarTopItems } from "./json";

function Sidebar() {
  const router = useRouter();

  return (
    <Container>
      <Top>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <IconContainer active={router.pathname === path ? true : false}>
              <Icon
                className="icon"
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </IconContainer>
          </Link>
        ))}
      </Top>
      <Bottom>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <IconContainer>
            <Link href={path} key={path}>
              <Icon
                className="icon"
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </Link>
          </IconContainer>
        ))}
      </Bottom>
    </Container>
  );
}

export default Sidebar;

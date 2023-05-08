import React from "react";
import Topbar from "../topbar";
import Sidebar from "../sidebar";
import BottomBar from "../bottomBar";
import TabBar from "../tabBar";
import Explorer from "../explorer";
import { Main, Pages, Wrapper } from "./styled";

type ILayout = {
  children: React.ReactNode;
};

function Layout({ children }: ILayout) {
  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <Explorer />
        <Wrapper>
          <TabBar />
          <Pages>{children}</Pages>
        </Wrapper>
      </Main>

      <BottomBar />
    </>
  );
}

export default Layout;

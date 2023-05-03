import React from "react";
import Topbar from "../topbar";
import Sidebar from "../sidebar";
import Explorer from "../explorer";
import BottomBar from "../bottomBar";

type ILayout = {
  children: React.ReactNode;
};

function Layout({ children }: ILayout) {
  return (
    <>
      <Topbar />
      <main style={{ display: "flex" }}>
        <Sidebar />
        <Explorer />
        <div
          style={{
            backgroundColor: "grey",
            flex: 1,
            height: "calc(100vh - 30px - 25px)",
          }}
        >
          {children}
        </div>
      </main>
      <BottomBar />
    </>
  );
}

export default Layout;

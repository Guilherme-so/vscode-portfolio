import React from "react";
import Topbar from "../topbar";
import Sidebar from "../sidebar";
import BottomBar from "../bottomBar";
import TabBar from "../tabBar";
import Explorer from "../explorer";

type ILayout = {
  children: React.ReactNode;
};

function Layout({ children }: ILayout) {
  return (
    <>
      <Topbar />
      <main style={{ display: "flex",overflow: 'hidden' }}>
        <Sidebar />
        <Explorer />
        <div
          style={{
            zIndex: '4',
            flex: 1,
            height: "calc(100vh - 30px - 25px)",
          }}
        >
          <TabBar />
          {children}
        </div>
      </main>
      <BottomBar />
    </>
  );
}

export default Layout;

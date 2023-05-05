import React from "react";
import Topbar from "../topbar";
import Sidebar from "../sidebar";
import BottomBar from "../bottomBar";
import TabBar from "../tabBar";
import Explorer from "../explorer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type ILayout = {
  children: React.ReactNode;
};

function Layout({ children }: ILayout) {
  return (
    <>
      <Topbar />

      <main style={{ display: "flex", overflow: "hidden" }}>
        <Sidebar />
        <Explorer />

        <div
          style={{
            zIndex: "4",
            flex: 1,
            height: "calc(100vh - 30px - 33px)",
          }}
        >
          <TabBar />
          <div
            style={{
              background: "#343746",
              height: "100%",
            }}
          >
            {children}
          </div>
        </div>
      </main>

      <BottomBar />
    </>
  );
}

export default Layout;

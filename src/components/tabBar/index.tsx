import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import Tab from "../tab";
import { Tabs } from "./syles";

function TabBar() {
  const files = useSelector((state: RootState) => state.files.value);
  const sidebarWidth = useSelector((state: RootState) => state.files.size);

  return (
    <Tabs size={sidebarWidth}
    // style={{
    //   width: `calc(100vw - ${sidebarWidth}px - 70px)`,
    // }}
    >
      {files.map((tab: any) => (
        <Tab
          id={tab.id}
          key={tab.id}
          icon={tab.icon}
          filename={tab.filename}
          path={tab.path}
        />
      ))}
    </Tabs>
  );
}

export default TabBar;

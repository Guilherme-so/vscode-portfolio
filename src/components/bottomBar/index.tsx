import React from "react";
import { Footer, ListOne, ListTwo } from "./styled";
import { ArrowsClockwise, Bell, Checks, GitBranch, User } from "phosphor-react";
import ChevronRight from "../icons/ChevronRight";

function BottomBar() {
  return (
    <Footer>
      <ListOne>
        <li>
          <span>
            <ChevronRight />
          </span>
          <span>
            <ChevronRight />
          </span>
        </li>
        <li>
          <GitBranch size={18} />
          <span>main*</span>
        </li>
        <li>
          <ArrowsClockwise size={16} />
        </li>
      </ListOne>

      <ListTwo>
        <li>
        <Checks size={18} color="white" />
        <span>Prettier</span>
        </li>
        <li>
          <User size={16} color="white" />
        </li>
        <li>
          <Bell size={16} color="white" />
        </li>
      </ListTwo>
    </Footer>
  );
}

export default BottomBar;

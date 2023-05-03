import { useState } from "react";
import Image from "next/image";

import {
  Container,
  TitleContainer,
  Heading,
  Folder,
  Files,
  File,
} from "./styled";

import ChevronRight from "../icons/ChevronRight";
import { FolderNotchOpen, FolderNotch } from "phosphor-react";

import { useRouter } from "next/router";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.yml",
    path: "/contact",
    icon: "yml_icon.svg",
  },
  {
    name: "projects.py",
    path: "/projects",
    icon: "py_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];

const Explorer = () => {
  const router = useRouter();
  const [portfolioIsOpen, setPortfolioIsOpen] = useState(true);
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  return (
    <Container>
      <TitleContainer>
        <p>Explorer</p> <span>...</span>
      </TitleContainer>

      <div>
        <Heading
          onClick={() => {
            setPortfolioIsOpen((prev) => !prev);
            isFolderOpen && setIsFolderOpen(false);
          }}
        >
          <ChevronRight
            className="chevron"
            style={portfolioIsOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </Heading>

        <Folder
          style={portfolioIsOpen ? { display: "flex" } : { display: "none" }}
          onClick={() => setIsFolderOpen((prev) => !prev)}
        >
          <ChevronRight
            className="chevron"
            style={isFolderOpen ? { transform: "rotate(90deg)" } : {}}
          />
          {isFolderOpen ? (
            <FolderNotchOpen size={20} color="#127a23" />
          ) : (
            <FolderNotch size={20} color="#127a23" />
          )}
          <p>src</p>
        </Folder>

        <Files
          style={isFolderOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <File onClick={() => router.push(item.path)} key={item.name}>
              <Image
                src={`/images/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              />{" "}
              <p>{item.name}</p>
            </File>
          ))}
        </Files>
      </div>
    </Container>
  );
};

export default Explorer;

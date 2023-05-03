import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addFile } from "../../redux/features/files/filesSlice";

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
import { RootState } from "@/redux/store";

const explorerItems = [
  {
    id: 1,
    icon: "/images/react_icon.svg",
    filename: "home.jsx",
    path: "/",
  },
  {
    id: 2,
    icon: "/images/html_icon.svg",
    filename: "about.html",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/yml_icon.svg",
    filename: "contact.yml",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/py_icon.svg",
    filename: "projects.py",
    path: "/projects",
  },
  {
    id: 5,
    icon: "/images/markdown_icon.svg",
    filename: "github.md",
    path: "/github",
  },
];
const Explorer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const getfiles = useSelector((state: RootState) => state.files.value);

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
            <File
              key={item.filename}
              onClick={() => {
                getfiles.includes(item) ? null : dispatch(addFile(item));
                router.push(item.path);
              }}
            >
              <Image
                src={`${item.icon}`}
                alt={item.filename}
                height={18}
                width={18}
              />{" "}
              <p>{item.filename}</p>
            </File>
          ))}
        </Files>
      </div>
    </Container>
  );
};

export default Explorer;

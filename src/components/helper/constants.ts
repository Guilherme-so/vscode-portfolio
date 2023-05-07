import FilesIcon from "../icons/FilesIcon";
import GithubIcon from "../icons/GithubIcon";
import CodeIcon from "../icons/CodeIcon";
import MailIcon from "../icons/MailIcon";
import AccountIcon from "../icons/AccountIcon";
import SettingsIcon from "../icons/SettingsIcon";

export const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

export const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

export const tabs = [
  {
    id: 1,
    icon: "/images/react_icon.svg",
    filename: "home.jsx",
    path: "/",
  },

  {
    id: 2,
    icon: "/images/react_icon.svg",

    // icon: "/images/html_icon.svg",
    filename: "about.html",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/react_icon.svg",

    // icon: "/images/yml_icon.svg",
    filename: "contact.yml",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/react_icon.svg",

    // icon: "/images/py_icon.svg",
    filename: "projects.py",
    path: "/projects",
  },
  {
    id: 5,
    icon: "/images/react_icon.svg",
    // icon: "/images/markdown_icon.svg",
    filename: "github.md",
    path: "/github",
  },
];

export const explorerItems = [
  {
    id: 1,
    icon: "/images/react_icon.svg",
    filename: "home.jsx",
    path: "/",
  },
  {
    id: 2,
    icon: "/images/react_icon.svg",

    // icon: "/images/html_icon.svg",
    filename: "about.html",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/react_icon.svg",
    // icon: "/images/yml_icon.svg",
    filename: "contact.yml",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/react_icon.svg",

    // icon: "/images/py_icon.svg",
    filename: "projects.py",
    path: "/projects",
  },
  {
    id: 5,
    icon: "/images/react_icon.svg",

    // icon: "/images/markdown_icon.svg",
    filename: "github.md",
    path: "/github",
  },
];

export const contactItems = [
  {
    social: "Email",
    link: "guilhermemagno09@gmail.com",
    href: "mailto:guilhermemagno09@gmail.com",
  },
  {
    social: "LinkedIn",
    link: "linkedin.com/in/guilherme-dso",
    href: "https://www.linkedin.com/in/guilherme-dso/",
  },
  {
    social: "GitHub",
    link: "github.com/Guilherme-so",
    href: "https://github.com/Guilherme-so",
  },
  {
    social: "Website",
    link: "gkos.tech",
    href: "https://gkos.tech",
  },
];

export const projects = [
  {
    title: "Campanha Animal",
    description: "Website para Ong de animais.",
    img: "/images/campanhaAnimal.png",
    link: "https://campanha-animal.vercel.app/",
  },
  {
    title: "Formulario de admissão",
    description:
      "Formulario de admissão para a gethash com nextjs e typescript.",
    img: "/images/admissao_form.png",
    link: "https://forms-data.vercel.app/",
  },
  {
    title: "Video Player",
    description: "Video player com NextJs e graphql.",
    img: "/images/video_player-1.png",
    link: "https://video-platform-kappa.vercel.app/",
  },
  {
    title: "MobAnime",
    description: "Site de anime com react e graphql",
    img: "/images/mobanime.png",
    link: "https://mobanime.vercel.app/",
  },
  {
    title: "Adivinhe Meu Numero",
    description: "Um simples jogo em vanilla js.",
    img: "/images/guess-mynumber.png",
    link: "https://guess-my-number-dom.vercel.app/",
  },
];

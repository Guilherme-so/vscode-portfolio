import FilesIcon from "../icons/FilesIcon";
import GithubIcon from "../icons/GithubIcon";
import CodeIcon from "../icons/CodeIcon";
import MailIcon from "../icons/MailIcon";
import AccountIcon from "../icons/AccountIcon";
import SettingsIcon from "../icons/SettingsIcon";

export const flags = [
  {
    locale: "pt-BR",
    label: "PT",
    img: "/flags/brasil-flag.png",
  },
  {
    locale: "en-US",
    label: "EN",
    img: "/flags/United-States.png",
  },
];

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
    filename: "home.tsx",
    path: "/",
  },

  {
    id: 2,
    icon: "/images/react_icon.svg",
    // icon: "/images/html_icon.svg",
    filename: "about.tsx",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/react_icon.svg",
    // icon: "/images/yml_icon.svg",
    filename: "contact.tsx",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/react_icon.svg",
    // icon: "/images/py_icon.svg",
    filename: "projects.tsx",
    path: "/projects",
  },
  {
    id: 5,
    // icon: "/images/react_icon.svg",
    icon: "/images/markdown_icon.svg",
    filename: "github.md",
    path: "/github",
  },
];

export const explorerItems = [
  {
    id: 1,
    icon: "/images/react_icon.svg",
    filename: "home.tsx",
    path: "/",
  },
  {
    id: 2,
    icon: "/images/react_icon.svg",
    // icon: "/images/html_icon.svg",
    filename: "about.tsx",
    path: "/about",
  },
  {
    id: 3,
    icon: "/images/react_icon.svg",
    // icon: "/images/yml_icon.svg",
    filename: "contact.tsx",
    path: "/contact",
  },
  {
    id: 4,
    icon: "/images/react_icon.svg",
    // icon: "/images/py_icon.svg",
    filename: "projects.tsx",
    path: "/projects",
  },
  {
    id: 5,
    // icon: "/images/react_icon.svg",
    icon: "/images/markdown_icon.svg",
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
    link: "My website",
    href: "https://vscode-portfolio-theta.vercel.app/",
  },
];

export const projects = [
  {
    title: "Ecommerce Website",
    description: "Ecommerce website com modo de pagamento",
    img: "/images/ecommerce.png",
    link: "https://ecommerce-ezdl.vercel.app/",
  },
  {
    title: "Vscode Portfolio",
    description: "Portfolio basiado no Visual studio Code",
    img: "/images/vscode-portfolio.png",
    link: "https://vscode-portfolio-theta.vercel.app/",
  },
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
];

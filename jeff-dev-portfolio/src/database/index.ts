import kenzieBurguerTs from "../img/burguerkenzieTs.png";
import kenziehub from "../img/kenziehub.png";
import burguerkenzie from "../img/burguerkenzie.png";

export interface iWorks {
  img: string;
  name: string;
  description: string;
  link: string;
  language: string;
}

interface iLanguages {
  language: string;
}

export const dataWorks: iWorks[] = [
  {
    img: kenzieBurguerTs,
    name: "Kenzie Burguer TS",
    description:
      "Projeto da Kenzie Burguer, refeito com TypeScript e refatorado, esse projeto emula uma loja de hambúrgueres com página de cadastro e login, utilizando API.",
    link: "https://kenzieburguertypescript.vercel.app",
    language: "TypeScript",
  },
  {
    img: kenziehub,
    name: "Kenzie Hub",
    description:
      "Projeto feito com react, esse projeto emula um contexto de usuário onde é possível adicionar e remover quais conhecimentos o usuário possui com página de cadastro e login, utilizando API.",
    link: "https://kenziehub-seven-beta.vercel.app",
    language: "React",
  },
  {
    img: burguerkenzie,
    name: "Kenzie Burguer TS",
    description:
      "Projeto da Kenzie Burguer, refeito com TypeScript e refatorado, esse projeto emula uma loja de hambúrgueres com página de cadastro e login, utilizando API.",
    link: "https://kenzieburguertypescript.vercel.app",
    language: "TypeScript",
  },
];

interface iExperience {
  local: string;
  about: string;
  date: string;
}

export const dataLanguages: iLanguages[] = [
  {
    language: "React",
  },
  {
    language: "TypeScript",
  },
  {
    language: "JavaScript",
  },
];

export const jobExperience: iExperience[] = [
  {
    local: "",
    about: "",
    date: "",
  },
];

export const education: iExperience[] = [
  {
    local: "",
    about: "",
    date: "",
  },
];

// <ul>
//               <li>
//                 <div>
//                   <h2>Local</h2>
//                   <p>sobre</p>
//                 </div>
//                 <div>
//                   <h3>data</h3>
//                 </div>
//               </li>
//             </ul>

import html5 from "../img/html5.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import ts from "../img/typescript.svg";
import figma from "../img/figma.svg";
import git from "../img/git.svg";

const LanguagesDivisor = () => {
  return (
    <div className="BoxLanguages">
      <div className="BoxItens">
        <div className="LanguageInsideBox">
          <img src={html5} alt="" />
          <h2>HTML</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={css} alt="" />
          <h2>CSS</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={js} alt="" />
          <h2>Java Script</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={react} alt="" />
          <h2>React</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={ts} alt="" />
          <h2>TypeScript</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={figma} alt="" />
          <h2>Figma</h2>
        </div>
        <div className="LanguageInsideBox">
          <img src={git} alt="" />
          <h2>git</h2>
        </div>
      </div>
    </div>
  );
};

export default LanguagesDivisor;

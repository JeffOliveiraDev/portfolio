import { FaHandSpock } from "react-icons/fa";
import mePhoto from "../../img/Mephoto.svg";
import background from "../../img/cool-background.png";
import gradiente from "../../img/gradiente1.png";
import brice from "../../img/brice.jpg";
import trianglify from "../../img/trianglify.png";
import darkprograming from "../../img/darkprograming.jpg";

export const Presentation = () => {
  return (
    <div className="BoxPresentation">
      <img src={darkprograming} alt="" />
      <div className="InteriorBoxPresentation">
        <div className="NameDetailsLeft">
          <h3>
            <FaHandSpock />
            Hello there! Me chamo
          </h3>
          <h2>Jefferson.</h2>
          <p>
            Psicólogo, estudante de desenvolvimento Full Stack e entusiasta de
            Inteligência Artificial!
          </p>
          <a href="#projects" className="BtnProjects">
            Veja meus projetos
          </a>
        </div>
        <div className="PhotoRight">
          <img src={mePhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

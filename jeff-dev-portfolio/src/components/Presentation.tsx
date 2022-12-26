import { FaHandSpock } from "react-icons/fa";
import mePhoto from "../img/Mephoto.svg";

export const Presentation = () => {
  return (
    <div className="BoxPresentation">
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
          <button className="BtnProjects">Veja meus projetos</button>
        </div>
        <div className="PhotoRight">
          <img src={mePhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

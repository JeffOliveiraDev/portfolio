import radialEffect from "../img/radialeffect.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaDev } from "react-icons/fa";

export const HeaderDashboard = () => {
  return (
    <header>
      <img src={radialEffect} alt="" />
      <div className="BoxHeaderNameBtns">
        <div className="NameHeader">
          <h2>
            <FaDev />
            Jeff-Dev
          </h2>
        </div>
        <div className="BtnsHeader">
          <button>
            <FaGithub />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button className="BtnDownloadCv">Download CV</button>
        </div>
      </div>
    </header>
  );
};

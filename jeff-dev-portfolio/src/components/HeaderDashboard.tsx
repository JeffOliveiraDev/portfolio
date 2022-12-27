import radialEffect from "../img/radialeffect.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderDashboard = () => {
  return (
    <header>
      <img src={radialEffect} alt="" />
      <div className="BoxHeaderNameBtns">
        <div className="NameHeader">
          <h2>
            <FaDev />
            Jeff
          </h2>
        </div>

        <div className="BtnsHeader">
          <button onClick={() => window.location.replace("www.google.com")}>
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

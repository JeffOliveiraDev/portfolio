import radialEffect from "../../img/radialeffect.svg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDev,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import CustomizedSwitches from "../Switch/Switch";

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

        <div className="BoxBtnsHeader">
          <CustomizedSwitches />
          <div className="BtnsHeader">
            <a href="https://github.com/JeffOliveiraDev">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/jefferson-oliveira-24b075117/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/jeff4851/">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5515996641604&text&type=phone_number&app_absent=0">
              <FaWhatsapp />
            </a>
          </div>
          <div className="CvsDownload">
            <a
              className="BtnDownloadCv"
              href="https://drive.google.com/file/d/1WAgPoIZYllb_XqZCICjzibYRdAOnUfS6/view?usp=sharing"
              download
            >
              Download CV-PT
            </a>
            <a
              className="BtnDownloadCv"
              href="https://drive.google.com/file/d/1GASZ0MRvV7Oqh5femUKi99xekPjhkZIe/view?usp=sharing"
              download
            >
              Download CV-EN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

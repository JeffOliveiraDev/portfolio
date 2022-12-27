import React from "react";
import { StyledDashboard } from "./style";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Presentation } from "../components/Presentation";
import LanguagesDivisor from "../components/LanguagesDivisor";
import escritorio from "../img/escritorio.svg";

import { FaGithub, FaInstagram, FaLinkedin, FaDev } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <HeaderDashboard />
      <Presentation />
      <LanguagesDivisor />
      <div className="BoxAboutMe">
        <div className="BoxInsideAbout">
          <div className="InsideBoxAboutMeLeft">
            <h2>
              <span>Sobre</span> mim
            </h2>
            <p>
              A creative professional with a strong portfolio in digital design,
              including experience with front-end development. Experienced
              working from concept to production, and with stakeholders from
              multiple disciplines. A fluent user of popular design tools like
              Figma and Adobe CC.
            </p>
            <div className="BtnsAboutMe">
              <FaGithub className="ItenAbout" />

              <FaInstagram className="ItenAbout" />

              <FaLinkedin className="ItenAbout" />
            </div>
          </div>
          <div className="InsideBoxAboutMeRight">
            <img src={escritorio} alt="" />
          </div>
        </div>
      </div>
    </StyledDashboard>
  );
};

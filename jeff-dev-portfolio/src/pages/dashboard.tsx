import React, { useState } from "react";
import { StyledDashboard } from "./style";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Presentation } from "../components/Presentation";
import { LanguagesDivisor } from "../components/LanguagesDivisor";
import { AboutMe } from "../components/AboutMe";
import { MyProjects } from "../components/MyProjects";
import { MySkills } from "../components/MySkills";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <HeaderDashboard />
      <Presentation />
      <LanguagesDivisor />
      <AboutMe />
      <MyProjects />
      <MySkills />

      <footer className="BoxContact">
        <div className="BoxFooter">
          <div className="BoxInteriorContact">
            <h2>
              © 2022 by Jefferson de Barros Oliveira | Feito com TypeScript{" "}
            </h2>
          </div>
          <div className="BtnsHeader">
            <h3>Entre em contato:</h3>
            <button>
              <FaWhatsapp />
            </button>
            <button onClick={() => window.location.replace("www.google.com")}>
              <FaGithub />
            </button>

            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedin />
            </button>
          </div>
        </div>
      </footer>
    </StyledDashboard>
  );
};

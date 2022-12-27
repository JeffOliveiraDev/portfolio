import React, { useState } from "react";
import { StyledDashboard } from "./style";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Presentation } from "../components/Presentation";
import { LanguagesDivisor } from "../components/LanguagesDivisor";
import { AboutMe } from "../components/AboutMe";
import Education from "../img/Educationhat.svg";
import PastaTrabalho from "../img/PastaTrabalho.svg";
import { FcReading, FcBriefcase } from "react-icons/fc";
import { dataLanguages, dataWorks, iWorks } from "../database";

export const Dashboard = () => {
  const [rendeWorks, setRenderWorks] = useState(dataWorks as iWorks[]);

  const filterRenderWorks = (langToRender: string) => {
    setRenderWorks(
      dataWorks.filter((lang) => {
        return lang.language === langToRender;
      })
    );
  };

  return (
    <StyledDashboard>
      <HeaderDashboard />
      <Presentation />
      <LanguagesDivisor />
      <AboutMe />

      <div className="BoxMyWorks">
        <div className="BoxInsideWorks">
          <div className="BoxTitleBtnsWorks">
            <h2>Meus Projetos</h2>
            <div className="BoxBtnsWorks">
              <button onClick={() => setRenderWorks(dataWorks)}>Todos</button>
              {dataLanguages?.map((lang) => {
                return (
                  <button
                    key={lang.language}
                    onClick={() => filterRenderWorks(lang.language)}
                  >
                    {lang.language}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <ul className="Works">
              {rendeWorks?.map((work) => {
                return (
                  <li className="InsideWorks">
                    <img src={work.img} alt="" />

                    <h3>{work.name}</h3>
                    <p>{work.description}</p>
                    <div className="boxBtnWork">
                      <button className="BtnVisitWork">Visitar</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="BoxEducationWork">
        <div className="BoxInteriorEducationWork">
          <div>
            <h2>🎓</h2>
            <h2>Educação</h2>
          </div>
          <div>
            <h2>💼</h2>
            <h2>Experiência</h2>
          </div>
        </div>
      </div> */}
    </StyledDashboard>
  );
};

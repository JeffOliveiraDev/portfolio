import React, { useState } from "react";
import { dataLanguages, dataWorks, iWorks } from "../database";

export const MyProjects = () => {
  const [rendeWorks, setRenderWorks] = useState(dataWorks as iWorks[]);

  const filterRenderWorks = (langToRender: string) => {
    setRenderWorks(
      dataWorks.filter((lang) => {
        return lang.language === langToRender;
      })
    );
  };
  return (
    <div className="BoxMyWorks">
      <div className="BoxInsideWorks">
        <div className="BoxTitleBtnsWorks">
          <h2>
            Meus <span>Projetos</span>
          </h2>
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
  );
};

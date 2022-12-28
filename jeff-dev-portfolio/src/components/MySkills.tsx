import {
  FcCollaboration,
  FcDataEncryption,
  FcReading,
  FcAbout,
  FcSteam,
} from "react-icons/fc";

export const MySkills = () => {
  return (
    <div className="BoxSkills">
      <div className="BoxInsideSkills">
        <h2 className="TittleSkills" id="HardSkills">
          Minhas <span>habilidades</span>
        </h2>
        <div className="BoxHabsImgs">
          <div className="Habilities">
            <span>
              <FcDataEncryption />
            </span>

            <div className="WhatCanIdo">
              <h2>O que eu já sei fazer(HardSkills):</h2>
              <p>
                Através dos cursos que venho fazendo, adquiri boas habilidades
                em linguagens de programação como HTML, CSS, JavaScript, React e
                TypeScript com consumo de APIs, também tenho conhecimento em
                Git, utilizo o GitHub para meus projetos. Possuo conhecimento
                básico de UX, utilizando Figma e Canva para vários trabalhos.
              </p>
            </div>
          </div>
          <div className="Habilities">
            <span>
              <FcCollaboration />
            </span>

            <div className="WhatCanIdo">
              <h2>Habilidades(SoftSkills):</h2>
              <p>
                Sou psicólogo formado e trabalhei por dez anos como Auxiliar de
                Administração em uma Unidade de Saúde da Família, possuo uma boa
                experiência lidando com diversos públicos e considero que
                trabalho muito bem em equipe, nesse trabalho eu era responsável
                pelo atendimento ao público na recepção e na farmácia,
                organizava e realizava os pedidos de medicamentos e materiais de
                escritório, além de enviar dados e incluir guias de pacientes
                nos sistemas municipal e estadual de saúde, através disso
                adquiri uma boa capacidade para trabalhar sobre pressão e ter
                flexibilidade ao lidar com as mais diversas situações.
              </p>
            </div>
          </div>
          <div className="Habilities">
            <span>
              <FcReading />
            </span>

            <div className="WhatCanIdo">
              <h2>O que estou aprendendo:</h2>
              <p>
                Atualmente estou prestes a entrar no 4º Módulo do curso de
                Desenvolvedor Full Stack da Kenzie Academy, a partir desse
                módulo começamos a estudar Back-End, nesse módulo estudaremos{" "}
                NodeJs, Express, Banco de dados SQL (PostgreSQL), Construção de
                APIs RESTful, Programação assíncrona e Metodologias Ágeis.
              </p>
            </div>
          </div>
          <div className="Habilities">
            <span>
              <FcAbout />
            </span>

            <div className="WhatCanIdo">
              <h2>Um pouco mais sobre mim:</h2>
              <p>
                Nas horas vagas tenho me dedicado a estudar Inteligências
                Artificiais, até criei um canal onde todo o conteúdo é 100%
                feito por 3 ou 4 IAs, com elas realizo a montagem do script do
                vídeo, narração e o vídeo em si, além de já testar a criação de
                imagens para thunbmail.
              </p>

              <p>
                Além disso me considero um Geek Otaku que gosta de jogos de
                estratégia! <FcSteam />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import escritorio from "../img/escritorio.svg";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaBirthdayCake,
} from "react-icons/fa";
import festaPosto from "../img/EuFestaPosto.jpg";

export const AboutMe = () => {
  return (
    <div className="BoxAboutMe">
      <div className="BoxInsideAbout">
        <div className="InsideBoxAboutMeLeft">
          <h2>
            <span>Sobre</span> mim
          </h2>
          <p>
            Olá, me chamo Jefferson, sou Psicólogo, trabalhei como Auxiliar de
            administração por dez anos em uma{" "}
            <a href="https://www.google.com/maps?q=usf+vila+sabia&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiyjvSypZz8AhWsrpUCHXO3DXAQ_AUoAXoECAEQAw">
              Unidade de Saúde da Família
            </a>{" "}
            , estou em transição de carreira, me voltando para a área que sempre
            gostei que é a TI! Veja minhas{" "}
            <a href="#HardSkills"> HardSkills!</a>
          </p>
          <p>
            Possuo uma boa experiência lidando com diversos públicos e considero
            que trabalho muito bem em equipe, nesse trabalho eu era responsável
            pelo atendimento ao público na recepção e na farmácia, organizava e
            realizava os pedidos de medicamentos e materiais de escritório, além
            de enviar dados e incluir guias de pacientes nos sistemas municipal
            e estadual de saúde, mas o principal legado foi a família de amigos
            que fiz, essa sem dúvida foi minha maior conquista nesses anos.
          </p>
          <p>
            No momento estou estudando para ser um Desenvolvedor Full Stack pela
            <a href="https://kenzie.com.br"> Kenzie Academy</a> e estudando
            sobre Inteligência Artificial nas horas vagas, até criei um{" "}
            <a href="https://www.youtube.com/channel/UCgOPNDAnS9wAwNihzkOq4Qw">
              canal
            </a>{" "}
            onde faço vídeos utilizando 3 a 4 IAs diferentes.
          </p>
          <p>
            Me considero um Geek Otaku que gosta demais de jogos de estratégia,
            se quiser dar uma espairecida do trabalho e precisar alguém pra
            jogar um Age 2 e bater um papo sobre animes é só me mandar uma
            mensagem para marcar!
          </p>
          <div className="BtnsAboutMe">
            <a href="https://api.whatsapp.com/send/?phone=5515996641604&text&type=phone_number&app_absent=0">
              <FaWhatsapp className="ItenAbout" />
            </a>
            <a href="https://github.com/JeffOliveiraDev">
              <FaGithub className="ItenAbout" />
            </a>
            <a href="https://www.instagram.com/jeff4851/">
              <FaInstagram className="ItenAbout" />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-oliveira-24b075117/">
              <FaLinkedin className="ItenAbout" />
            </a>
          </div>
        </div>
        <div className="InsideBoxAboutMeRight">
          <img
            src={escritorio}
            alt="escritorio de trabalho"
            className="ImgWorkTable"
          />
        </div>
      </div>
    </div>
  );
};

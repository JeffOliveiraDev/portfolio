import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="BoxContact">
      <div className="BoxFooter">
        <div className="BoxInteriorContact">
          <h2>
            © 2022 by Jefferson de Barros Oliveira | Feito com TypeScript{" "}
          </h2>
        </div>
        <div className="BtnsHeader">
          <h3>Entre em contato:</h3>
          <a href="https://api.whatsapp.com/send/?phone=5515996641604&text&type=phone_number&app_absent=0">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/JeffOliveiraDev">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jefferson-oliveira-24b075117/">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/jeff4851/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

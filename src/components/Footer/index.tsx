import { Adress, Footage } from "./styles";
import Logo from "../../assets/LOGO-SAMEDU-A-02.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <Footage>
      <Adress>
        <img src={Logo} style={{ width: 65, height: 45 }} />
      </Adress>
      <Adress>
        <a href="https://www.instagram.com/samedu.br/" target="_blank">
          {" "}
          <FaInstagram style={{ width: 30, height: 30, color: "#1f303f" }} />
        </a>
        <a href="contato@samedu.com.br" target="_blank">
          <MdEmail style={{ width: 30, height: 30, color: "1f303f" }} />
        </a>
        <a href="+55 15 98177-4493" target="_blank">
          <AiOutlinePhone style={{ width: 30, height: 30, color: "1f303f" }} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin style={{ width: 30, height: 30, color: "1f303f" }} />
        </a>
      </Adress>
      <Adress>
        <a>© 2022 SamEdu | Feito com ❤ </a>
      </Adress>
    </Footage>
  );
};

export { Footer };

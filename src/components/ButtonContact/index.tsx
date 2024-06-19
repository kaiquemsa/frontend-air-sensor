import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const ButtonContact: React.FC = () => {
  const navigation = useNavigate();
  return (
    <>
      <a onClick={() => navigation("/sobrenos")}>
        <Container>Saiba mais</Container>
      </a>
    </>
  );
};
export { ButtonContact };

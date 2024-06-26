import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const ButtonContact: React.FC = () => {
  const navigation = useNavigate();
  return (
    <>
      <a onClick={() => navigation("/dashboard")}>
        <Container>Saiba mais</Container>
      </a>
    </>
  );
};
export { ButtonContact };

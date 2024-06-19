import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const Button: React.FC = () => {
  const navigation = useNavigate();
  
  return <a data-selected='login' onClick={() => navigation('/login')}><Container>Entre</Container></a>;
};

export { Button };

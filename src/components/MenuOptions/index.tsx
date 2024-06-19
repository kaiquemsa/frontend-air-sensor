import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

interface MenuOptionsProps {
  label: string;
  path: string;
  selected: boolean;
}

const MenuOptions: React.FC<MenuOptionsProps> = ({ label, path, selected }) => {
  const navigation = useNavigate();

  return (
    <Container>
      <a data-selected={selected} onClick={() => navigation(path)}>
        {label}
      </a>
    </Container>
  );
};

export { MenuOptions };

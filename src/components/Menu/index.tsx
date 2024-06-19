import { MenuList } from "./styles";
import { MenuOptions } from "../MenuOptions";

export type MenuPage =
  | "inicio"
  | "dashboard"
  | "dashboard-predict"

interface MenuProps {
  page: MenuPage;
}

const Menu: React.FC<MenuProps> = ({ page }) => {
  return (
    <MenuList>
      <MenuOptions label="Início" path="/" selected={page === "inicio"} />
      <MenuOptions
        label="Dashboard"
        path="/dashboard"
        selected={page === "dashboard"}
      />
      <MenuOptions
        label="Dashboard Predict"
        path="/dashboard-predict"
        selected={page === "dashboard-predict"}
      />
    </MenuList>
  );
};

export { Menu };

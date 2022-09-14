import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const currenPath = useLocation();
  const finalCurrenPath = currenPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrenPath);

  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(name);
  };
  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        ></Menu.Item>
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        ></Menu.Item>
      </Menu>
    </div>
  );
}

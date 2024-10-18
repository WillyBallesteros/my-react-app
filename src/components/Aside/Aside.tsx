import { useState } from "react";
import { Image } from "@chakra-ui/react";
import { GoPlusCircle } from "react-icons/go";
import styles from "./componentsAside/Sidebar.module.css";
import logo from "../../assets/logo.webp";
import {
  BarChartLine,
  CalendarEvent,
  CashStack,
  People,
  ClipboardData,
  Gear,
  Person,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Usuario");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Crear", icon: <GoPlusCircle />, path: "/dashboard/create" },
    { name: "Resumen", icon: <BarChartLine />, path: "/dashboard/summary" },
    { name: "Usuario", icon: <Person />, path: "/dashboard/users" },
    {
      name: "Incidentes",
      icon: <CalendarEvent />,
      path: "/dashboard/incidents",
    },
    { name: "Planes", icon: <CashStack />, path: "/dashboard/plans" },
    { name: "Roles", icon: <People />, path: "/dashboard/roles" },
    { name: "Actividad", icon: <ClipboardData />, path: "/dashboard/activity" },
    { name: "Admin", icon: <Gear />, path: "/dashboard/admin" },
  ];

  const handleMenuClick = (item: { name: string; path: string }) => {
    setActive(item.name);
    navigate(item.path);
  };

  return (
    <aside className={styles.sidebar}>
      <Image transform="translateY(-1vh)" src={logo} className={styles.logo} />
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={styles.menuItem}
            onClick={() => handleMenuClick(item)}
          >
            <span
              className={`${styles.iconContainer} ${
                active === item.name ? styles.activeIcon : ""
              }`}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.name}>{item.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

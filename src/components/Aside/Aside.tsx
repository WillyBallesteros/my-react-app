import React, { useState } from 'react';
import { Image } from '@chakra-ui/react'
import styles from './componentsAside/Sidebar.module.css';
import logo from '../../assets/Logo.webp'
import { Plus, BarChartLine, CalendarEvent, CashStack, People, ClipboardData, Gear, Person } from 'react-bootstrap-icons';

const Sidebar = () => {
  const [active, setActive] = useState('Usuario'); 

  const menuItems = [
    { name: 'Crear', icon: <Plus /> },
    { name: 'Resumen', icon: <BarChartLine /> },
    { name: 'Usuario', icon: <Person /> },
    { name: 'Incidentes', icon: <CalendarEvent /> },
    { name: 'Planes', icon: <CashStack /> },
    { name: 'Roles', icon: <People /> },
    { name: 'Actividad', icon: <ClipboardData /> },
    { name: 'Admin', icon: <Gear /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <Image transform="translateY(-20%)" src={logo} className={styles.logo} />
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.menuItem} ${active === item.name ? styles.active : ''}`}
            onClick={() => setActive(item.name)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.name}>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

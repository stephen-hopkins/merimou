import React from 'react';
import {Menubar} from "primereact/menubar";
import SearchPlaces from "@/components/SearchPlaces";
import styles from '@/styles/AppMenu.module.css'

function AppMenu() {

  const items = [
    {
      label: 'Lists',
      icon: 'pi pi-list',
      items: [
        {
          label: 'Default',
        }
      ]
    }
  ];

  return (
    <Menubar start={<SearchPlaces />} model={items} className={styles.menu}/>
  );
}

export default AppMenu;
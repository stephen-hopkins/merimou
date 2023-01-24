import React from 'react';
import {Menubar} from "primereact/menubar";
import SearchPlaces from "@/components/SearchPlaces";

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
    },
    {
      label: 'Add',
      icon: 'pi pi-plus'
    }
  ];

  return (
    <menu>
      <Menubar end={<SearchPlaces />} model={items} />
    </menu>
  );
}

export default AppMenu;
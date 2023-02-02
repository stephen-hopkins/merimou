import React from 'react';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {InputTextarea} from "primereact/inputtextarea";
import styles from '@/styles/SearchPlacesResults.module.css';

export type AddPlaceProps = {
  show: boolean;
  name: string | undefined;
  setName: (name: string) => void;
  description: string | undefined;
  setDescription: (desc: string) => void;
  save: () => void;
  cancel: () => void;
}

function AddPlace({show, name, setName, description, setDescription, save, cancel}: AddPlaceProps) {
  return (
    <Dialog onHide={cancel} visible={show} header="Confirm details">
      <div >
        <label className="p-float-label" htmlFor="name">Name</label>
        <InputText id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className={styles.formline}>
        <label className="p-float-label" htmlFor="description">Description</label>
        <InputTextarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className={styles.confirm}>
        <Button onClick={save} label="Add" className="p-button-success p-button-text" />
        <Button onClick={cancel} label="Reset" className="p-button-warning p-button-text" />
      </div>
    </Dialog>
  );
}

export default AddPlace;
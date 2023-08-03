import Image from 'next/image';
"use client"; // This is a client component
import style from './page.module.css'
import React, { useState } from 'react';
import ModalComponent from '../components/Modal';
import Map from '../components/Map';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  let address = 'Nizami kuc 10, Baku, Azerbaijan';
  
  return (
    <div>
      <h1 className={style.name__app}>Useful water</h1>
      <div className={style.open__modal}>
        <button className={style.open__modal_button} onClick={openModal} >Добавить источник питьевой воды</button> 
        <ModalComponent isOpen={isOpen} onClose={closeModal} /> 
        </div>
      <Map address={address} />
    </div>
  );
};
export default Home;

"use client"; // This is a client component
import style from './page.module.css'
import React, { useState } from 'react';
import ModalComponent from '../components/Modal/Modal';
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
    <>
      <h1 className={style.name__app}>Питьевая вода</h1>
      <div className={style.open__modal}>
        <button className={style.open__modal_button} onClick={openModal} >
        <h5>Добавить</h5>
        <img
          src="https://cdn.icon-icons.com/icons2/516/PNG/512/water_drink_bottle_icon-icons.com_51087.png"
          height={25}
          width={25}
          alt=""
        />

        </button> 
        <ModalComponent isOpen={isOpen} onClose={closeModal} /> 
        </div>
      <Map address={address} />
    </>
  );
};
export default Home;

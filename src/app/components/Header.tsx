"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <Image src={'/logo.png'} alt='Logo' width={50} height={50} className={styles.logo} />
      <nav>
        <ul className={nav ? `${styles.menu} ${styles.active}` : styles.menu}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/#luxury'>Luxury Selection</Link></li>
          <li><Link href='/#find'>Find your drive</Link></li>
          <li><AiOutlineSearch size={25} style={{ marginTop: '6px' }} /></li>
          <li><AiOutlineUser size={25} style={{ marginTop: '6px' }} /></li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;

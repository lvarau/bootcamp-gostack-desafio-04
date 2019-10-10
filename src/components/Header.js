import React from 'react';
import profile from '../assets/facewhite.png';
import { MdAccountCircle } from 'react-icons/md';

function Header() {
  return (
    <header>
      <nav>
        <img src={profile} alt="facebook" />
        <div>
          <span>Meu perfil</span>
          <MdAccountCircle />
        </div>
      </nav>
    </header>
  );
}

export default Header;

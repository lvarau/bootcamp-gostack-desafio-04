import React from "react";
import logoFace from "../assets/facewhite.png";
import { MdAccountCircle } from "react-icons/md";

function Header() {
  return (
    <header>
      <nav>
        <img src={logoFace} alt="facebook" />
        <div>
          <span>Meu perfil</span>
          <MdAccountCircle />
        </div>
      </nav>
    </header>
  );
}

export default Header;

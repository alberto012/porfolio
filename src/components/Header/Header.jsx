import React from "react";
import "./Header.css";
import az from "../../assets/images.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header-top">
      <img src={az} alt="" className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "rgba(44, 44, 44, 0.781)",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={()=>setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ wigth: ".2rem", height: ".8rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu" >
          <li onClick={()=>setMenuOpen(false)}>
          <Link
          to= "Home"
          span={true}
          smooth={true}
          onClick={()=>setMenuOpen(false)}
          > Home </Link></li>
          <li onClick={()=>setMenuOpen(false)}> <Link
          to= "about-me"
          span={true}
          smooth={true}
          onClick={()=>setMenuOpen(false)}
          >Mas Info</Link></li>
          <li onClick={()=>setMenuOpen(false)}>  <Link
          to= "proyects"
          span={true}
          smooth={true}
          onClick={()=>setMenuOpen(false)}
          >Proyectos</Link></li>
          <li onClick={()=>setMenuOpen(false)}> <Link
          to= "footer"
          span={true}
          smooth={true}
          onClick={()=>setMenuOpen(false)}
          > Contacto</Link></li>
        </ul>
      )}
    </div>
  );
};

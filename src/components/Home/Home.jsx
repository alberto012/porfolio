import React from "react";
import { Header } from "../Header/Header";
import "./Home.css";
import foto from"../../assets/foto.png"
import {motion} from"framer-motion"
import pdf  from "../../assets/CV.pdf"
const Home = () => {
  const transition = {type:"spring", duration:3}
  const mobile= window.innerWidth<=768?true:false;
  return (
    <div className="Home">
      <div className="blur home-blur"></div>
      <div className="left-h">
        {" "}
        <Header />
        <div className="moving">
          <motion.div
          initial= {{left:mobile?"110px":"170px"}}
          whileInView={{left:"8px"}}
          transition={{...transition, type:"tween"}}></motion.div>
          <span>Welcome To my Portfolio</span>
        </div>
        <div className="text-name">
          <div>
            <span className="stroke-text">Alberto </span>
            <span>Zalazar</span>
          </div>
          <div>
          <span>FullStack </span>
          <span>dev</span>

          </div>
        </div>
        
        <div className="data">
        <div>
          <span>Back-End</span>
          <span>Node.js, SQL, MongoDB, Express</span>
        </div>
        <div>
          <span>Front-End</span>
          <span>React/native, Redux/toolkite, Boostrap, Tailwind Css</span>
        </div>
        <div>
          <span>Lenguage</span>
          <span>JavaScript, TypeScript</span>
        </div>
        
      </div>
      <div className="btns">
        <button className= "btn"> <a href={pdf}  style={{textDecoration:"none", color:"white"}}target="_blank" rel="noopener noreferrer">Download CV</a></button>
      </div>
      </div>
      
      <div className="right-h">
      <div className="blurred h-blur"></div>
        
        <motion.img 
        initial={{top:"-10rem"}}
        whileInView={{top:"0rem"}}
        transition={transition} src={foto} alt="" />

        

      </div>
     
      
    </div>
  );
};

export default Home;

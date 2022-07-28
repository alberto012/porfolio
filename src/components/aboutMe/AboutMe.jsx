import React, { useState } from "react";
import "./AboutMe.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
export const AboutMe = () => {
  const transition = { type: "spring", duration: "3" };
  const [select, setSelect] = useState(0);
  const pag = testimonialsData.length;

  return (
    <div className="about-me" id="me">
      <div className="left">
        <span>Sobre mi</span>
        <motion.span
         key={select}
         initial={{opactiy: 0, x:100}}
         animate={{opacity:1, x:0}}
         exit={{opacity:0, x:-100}}
         transition={transition}>{testimonialsData[select].review}</motion.span>
        <span>
          <motion.span
         key={select}
         initial={{opactiy: 0, x:100}}
         animate={{opacity:1, x:0}}
         exit={{opacity:0, x:-100}}
         transition={transition}
          
          style={{ color: "black" }}>
            {testimonialsData[select].name}{" "}
          </motion.span>
          -{testimonialsData[select].status}
        </span>
      </div>
      <div className="right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 3 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
      <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 1 }}
          whileInView={{ opacity: 1, x: 2 }}
        ></motion.div>
     
        <motion.img 
        key={select}
        initial={{opactiy: 0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition}
        src={testimonialsData[select].image} alt="" />
        <div className="arrows">
          <img
            onClick={() =>
              select === 0 ? pag - 1 : setSelect((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />{" "}
          <img
            onClick={() =>
              select === pag - 1 ? setSelect(0) : setSelect((prev) => prev + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

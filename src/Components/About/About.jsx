import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
export const About = () => {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

return(
<div className={style.aboutWrapper} id="about">   
  <div ref={componentRef} className={`${style.leftSection} ${isVisible ? style.visible : ""}`}>
    <h1>About Me</h1>
    <p>My name is Moiz Ajmal. I am Mern Stack developer
    with six months experience. I have intermediate experience
    in Frontend development using React Js and inbackend development using Node Js.</p>
  </div>
  <div  ref={componentRef} className={`${style.rightSection} ${isVisible ? style.visible : ""}`}>
    <h2>HTML & CSS </h2>
    <p>90%</p>
    <div ref={componentRef} className={`${style.progressBar1} ${isVisible ? style.visible : ""}`}>
      <div className={style.progress}></div>
    </div>
    <h2>JavaScript </h2>
    <p>80%</p>
    <div ref={componentRef} className={`${style.progressBar2} ${isVisible ? style.visible : ""}`}>
      <div className={style.progress}></div>
    </div>
    <h2>React Js </h2>
    <p>60%</p>
    <div ref={componentRef} className={`${style.progressBar3} ${isVisible ? style.visible : ""}`}> 
      <div className={style.progress}></div>
    </div>
  </div>
</div>
);
} ;
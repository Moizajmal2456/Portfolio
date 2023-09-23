import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";

export const Skills  = () => {

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
<div className={style.skillsWrapper} id="skills">
  <h1>Skills</h1>
    <div className={style.skills}>
     <div ref={componentRef} className={`${style.frontend} ${isVisible ? style.visible : ""}`}>
       <h2>Frontend</h2>
         <ul>
            <li>Html</li>
            <li>CSS & SCSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Chakra Ui</li>
            <li>Redux</li>
            <li>React Js</li>
         </ul>
      </div>
      <div ref={componentRef} className={`${style.backend} ${isVisible ? style.visible : ""}`}>
        <h2>Backend</h2>
         <ul>
            <li>Express Js</li>
            <li>Mongodb</li>
            <li>Firebase</li>
            <li>Nest Js</li>
            <li>Node Js</li>
         </ul>
      </div>
      <div ref={componentRef} className={`${style.others} ${isVisible ? style.visible : ""}`}>
        <h2>Others</h2>
         <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Ngrok</li>
            <li>Postman</li>
         </ul>
       </div>
    </div>
</div>
);
};
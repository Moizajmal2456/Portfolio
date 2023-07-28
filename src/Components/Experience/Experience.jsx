import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
export const Experience = () => {

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
<div className={style.experienceWrapper} id="experience">
  <h1>Experience</h1>
    <div ref={componentRef}  className={`${style.cardsWrapper} ${isVisible ? style.visible : ""}`}>
      <div className={style.geekybugs}>
       <h2>Internship</h2>
       <p>Software Development</p>
       <p>Geekybugs Lahore</p>
       <p>3 months work experience as React Js intern</p>
       <button>Certificate</button>
      </div>
      <div className={style.exd}>
       <h2>Bootcamp</h2>
       <p>Mern Stack</p>
       <p>Excellence Delivered</p>
       <p>3 months Mern stack experience</p>
       <button>Certificate</button>
      </div>
    </div>
</div>    
);
};
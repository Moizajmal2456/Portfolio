import React, { useEffect, useRef, useState} from "react";
import { ExperienceData } from "../../Data/Data";
import style from "./styles.module.scss";
import { ExperienceCards } from "../Cards/ExperienceCard/ExperienceCards";

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
    {ExperienceData.map (data => {
      return(
        <ExperienceCards
        class1={data.type}
        subject={data.technology}
        institute={data.office}
        marks={data.experience}
        buttonText={data.buttonText}
      /> )})
    }
  </div>
</div>    
);
};

import React, { useEffect, useRef, useState } from "react";
import { EducationData } from "../../Data/Data";
import style from "./styles.module.scss";
import { Cards } from "../Cards/Cards";

export const Education = () => {

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
  <div className={style.educationWrapper} id="education">
  <h1>Education</h1>
    <div ref={componentRef} className={`${style.cardsWrapper} ${isVisible ? style.visible : ""}`}>
    {EducationData.map(data => {
      return(
        <Cards
        class1={data.class}
        subject={data.subject}
        institute={data.institute}
        marks={data.marks}
        buttonText={data.buttonText}/>
      )})
    }
    </div>
</div>    
);
};

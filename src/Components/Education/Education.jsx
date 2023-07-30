import React, { useEffect, useRef, useState } from "react";
import { EducationData } from "../../Data/Data";
import style from "./styles.module.scss";
import { Cards } from "../Cards/Cards";

const interUrl = "https://drive.google.com/file/d/11p5niiiOl3zUJwvnoRvH9rD36svb0YJU/view?usp=drive_link";
const bsUrl = "https://drive.google.com/file/d/1t7zF4C4ArNkG8tzgEnx68fxi4AXQVkNl/view?usp=drive_link";

const handleIntermediateResult = () => {
  const link = document.createElement('a');
  link.href = interUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleBsResult = () => {
  const link = document.createElement('a');
  link.href = bsUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Education = () => {

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
  <div className={style.educationWrapper}>
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

export default Education;
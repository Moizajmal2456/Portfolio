import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";

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
      <div className={style.school}>
       <h2>Matric</h2>
       <p>Computer Science</p>
       <p>Govt Boys High School Harbanspura Lahore</p>
       <p>Marks 899/1100</p>
       <button>View Result</button>
      </div>
      <div className={style.college}>
       <h2>Intermediate</h2>
       <p>Computer Science</p>
       <p>Govt Islamia College Railway Road Lahore</p>
       <p>Marks 741/1100</p>
       <button onClick={handleIntermediateResult}>View Result</button>
      </div>
      <div className={style.university}>
       <h2>Bachelors</h2>
       <p>Information Technology</p>
       <p>University Of The Punjab</p>
       <p>CGPA 3.19</p>
       <button onClick={handleBsResult}>View Result</button>
      </div>
    </div>
</div>    
);
};

export default Education;
import React, { useEffect, useRef, useState } from "react";
import style from "./ScrollAnimatedComponent.css";

const AnimatedComponent = () => {
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

  return (
    <div ref={componentRef} className={`scrollAnimatedComponent ${isVisible ? "visible" : ""}`}>
       <h1>Education</h1>
    <div  className="cardsWrapper">
      <div className="school">
       <h2>Matric</h2>
       <p>Computer Science</p>
       <p>Govt Boys High School Harbanspura Lahore</p>
       <p>Marks 899/1100</p>
       <button>View Result</button>
      </div>
      <div className="college">
       <h2>Intermediate</h2>
       <p>Computer Science</p>
       <p>Govt Islamia College Railway Road Lahore</p>
       <p>Marks 741/1100</p>
       {/* <button onClick={handleIntermediateResult}>View Result</button> */}
      </div>
      <div className="university">
       <h2>Bachelors</h2>
       <p>Information Technology</p>
       <p>University Of The Punjab</p>
       <p>CGPA 3.19</p>
       {/* <button onClick={handleBsResult}>View Result</button> */}
      </div>
    </div>
    </div>
  );
};

export default AnimatedComponent;
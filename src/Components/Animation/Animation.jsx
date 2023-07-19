// import React , {useState , useRef , useMemo} from "react";
// import { useEffect } from "react";

// const ElementOnScreen = (option , targetRef) => {

//   const targetRef = useRef();
//   const [isVisible , setIsVisible] = useState(false);
  
// const callBack = entries => {
//   const [entry] = entries;
//   setIsVisible(entry.isIntersecting);
// }

// const option = useMemo (() => {
//   return{
//     option 
//   }
// }, [option]); 

// useEffect(() => {
//   const observer = new IntersectionObserver(callBack , option);
//   const currentTarget = targetRef.current;
//   if(currentTarget) observer.observe(currentTarget);
//   {
//     return () => {
//       if(currentTarget) observer.unobserve(currentTarget);
//     }
//   }
// }, [targetRef, option]);
// return isVisible;
// }

// export default ElementOnScreen;



// import React, { useRef, useState, useEffect } from 'react';
// import style from "./styles.module.scss";

// const AnimatedComponent = ({ children }) => {
//   const elementRef = useRef(null);
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !animated) {
//             entry.target.classList.add(style.animatedComponent);
//             setAnimated(true);
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Adjust this threshold based on when you want the animation to trigger
//       }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [animated]);

//   return <div ref={elementRef}>{children}</div>;
// };

// export default AnimatedComponent;



import { useState, useEffect } from "react";

const useInView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector("#education"); // Replace "component" with the ID of your component
    if (target) observer.observe(target);
    console.log("Observing target");

    return () => {
      if (target) observer.unobserve(target);
      console.log("Unobserving target");
    };
  }, []);

  return isVisible;
};

export default useInView;

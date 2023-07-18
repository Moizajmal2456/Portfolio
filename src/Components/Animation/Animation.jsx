// import React, { useRef, useState, useEffect } from 'react';
// import style from "./styles.module.scss";

// const AnimatedComponent = ({ children }) => {
//   const elementRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !animate) {
//             entry.target.classList.add(style.animatedComponent);
//             setAnimate(true);
//             observer.unobserve(entry.target); // Unobserve the target after animating
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
//   }, [animate]);

//   return <div ref={elementRef}>{children}</div>;
// };

// export default AnimatedComponent;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from "./styles.module.scss";

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={`${style.animatedComponent} ${inView ? 'in-view' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
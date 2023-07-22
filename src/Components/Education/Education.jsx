import useInView from "../Animation/Animation";
import style from "./styles.module.scss";


const Education = () => {
  // const isVisible = useInView();
  // const className = isVisible ? "visible" : "hidden";
return(
<div className={style.educationWrapper} id="education">
  <h1>Education</h1>
    <div  className={style.cardsWrapper}>
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
       <button>View Result</button>
      </div>
      <div className={style.university}>
       <h2>Bachelors</h2>
       <p>Information Technology</p>
       <p>University Of The Punjab</p>
       <p>CGPA 3.19</p>
       <button>View Result</button>
      </div>
    </div>
</div>    
);
};

export default Education;
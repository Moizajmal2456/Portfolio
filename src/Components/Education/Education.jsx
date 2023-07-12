import style from "./styles.module.scss";
export const Education = () => {
return(
<div className={style.educationWrapper}>
        <h1>Education</h1>
    <div  className={style.cardsWrapper}>
      <div className={style.school}>
      <h2>Matric</h2>
       <h3>Computer Science</h3>
       <h3>Govt Boys High School Harbanspura Lahore</h3>
       <h3>Marks 899/1100</h3>
       <button>View Result</button>
      </div>
      <div className={style.college}>
      <h2>Intermediate</h2>
       <h3>Computer Science</h3>
       <h3>Govt Islamia College Railway Road Lahore</h3>
       <h3>Marks 741/1100</h3>
       <button>View Result</button>
      </div>
      <div className={style.university}>
      <h2>Bachelors</h2>
       <h3>Information Technology</h3>
       <h3>University Of The Punjab</h3>
       <h3>CGPA 3.19</h3>
       <button>View Result</button>
      </div>
    </div>
</div>    
);
};
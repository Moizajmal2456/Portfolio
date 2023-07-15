import style from "./styles.module.scss";

export const Skills  = () => {
return(
    <div className={style.skillsWrapper}>
        <h1>Skills</h1>
      <div className={style.skills}>
       <div className={style.frontend}>
         <h2>Frontend</h2>
         <ul>
            <li>Html</li>
            <li>CSS & SCSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Chakra Ui</li>
            <li>Redux</li>
            <li>React Js</li>
         </ul>
       </div>
       <div className={style.backend}>
         <h2>Backend</h2>
         <ul>
            <li>Express Js</li>
            <li>Mongodb</li>
            <li>Firebase</li>
            <li>Nest Js</li>
            <li>Node Js</li>
         </ul>
       </div>
       <div className={style.others}>
         <h2>Others</h2>
         <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Ngrok</li>
            <li>Postman</li>
         </ul>
       </div>
      </div>
    </div>
);
};
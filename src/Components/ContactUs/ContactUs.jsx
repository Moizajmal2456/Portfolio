import React, { useEffect, useRef, useState } from "react";
import firebase from "../../firebase";
import style from "./styles.module.scss";
import { database1 } from "../../firebase";
import { Exception } from "sass";

export const ContactUs = () => {
  const [name , setName] = useState({
    name: '',
    email: '',
    mobileNo:'',
    message: '',
  });
  // const [email , setEmail] = useState();
  // const [mobileNo , setMobile] = useState();
  // const [message , setMessage] = useState();

const handleName = (event) => {
  const {name , value}  = event.target;
setName((prevData) => ({
  ...prevData,
  [name]: value,
}));
}

// const handleEmail = (event) => {
// setEmail(event.target.value);
// }

// const handleNumber = (event) => {
// setMobile(event.target.value);
// };

// const handleMessage = (event) => {
// setMessage(event.target.value);
// };

const handleSubmit = (event) => {
  event.preventDefault();
  const database = firebase.database();
  const formRef = database.ref('name');
  formRef.push(name);
  setName({
    name: '',
    email: '',
    mobileNo: '',
    message: '',
  });
};


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
<div className={style.contactUsWrapper} id="contact">
  <h1>Contact Me</h1>
  <div className={style.wrapper}>
    <div ref={componentRef} className={`${style.leftSection} ${isVisible ? style.visible : ""}`}>
    <img src="/Images/webdesigndevelopment.webp" alt="animation"/>
    </div>
    <div ref={componentRef} className={`${style.rightSection} ${isVisible ? style.visible : ""}`}>
      <form onSubmit={handleSubmit}>
        <input className={style.Email} type='string' name='name' value={name} placeholder='Your Name' onChange={handleName}/>
        <input className={style.Email} type='email' name='email' value={name.email} placeholder='Your Email' onChange={handleName}/>
        <input className={style.Email} type='number' name='mobileNumber' value={name.mobileNo} placeholder='Your Mobile Number' onChange={handleName}/>
        <textarea className={style.Email} type='string' name='message' value={name.message} placeholder='Your Message' rows={10} onChange={handleName}/>
        <button className={style.Button} type='submit' >Submit</button>
      </form>
    </div>
  </div>
</div>
);
};
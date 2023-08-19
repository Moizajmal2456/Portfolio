import React, { useEffect, useRef, useState } from "react";
import firebase from "../../firebase";
import style from "./styles.module.scss";

export const ContactUs = () => {
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    mobileNo:'',
    message: '',
  });

const handleChange = (event) => {
  const {name , value}  = event.target;
  setFormData((prevData) => ({
  ...prevData,
  [name]: value,
}));
}

const handleSubmit = (event) => {
  event.preventDefault();
  const database = firebase.database();
  const formRef = database.ref('name');
  formRef.push(formData);
  setFormData({
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
        <input className={style.Email} type='string' name='name' value={formData.name} placeholder='Your Name' onChange={handleChange} required/>
        <input className={style.Email} type='email' name='email' value={formData.email} placeholder='Your Email' onChange={handleChange} required/>
        <input className={style.Email} type='tel' name='mobileNo' value={formData.mobileNo} placeholder='Your Mobile Number' onChange={handleChange} required/>
        <textarea className={style.Email} type='string' name='message' value={formData.message} placeholder='Your Message' rows={10} onChange={handleChange} required/>
        <button className={style.Button} type='submit' >Submit</button>
      </form>
    </div>
  </div>
</div>
);
};
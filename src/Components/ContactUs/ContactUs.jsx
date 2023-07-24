import { useState } from "react";
import React from 'react';
import firebase from "../../firebase";
import style from "./styles.module.scss";
import { database1 } from "../../firebase";

export const ContactUs = () => {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [mobileNo , setMobile] = useState();
  const [message , setMessage] = useState();

const handleName = (event) => {
setName(event.target.value);
}

const handleEmail = (event) => {
setEmail(event.target.value);
}

const handleNumber = (event) => {
setMobile(event.target.value);
};

const handleMessage = (event) => {
setMessage(event.target.value);
};

const handleSubmit = (event) => {
  // event.preventDefault();
  // // Save form data to Firebase database
  // firebase.database().ref('user').push({
  //         Name: name,
  //         Email: email,
  //         MobileNo: mobileNo,
  //         Message: message,
  // });
  // // Show a success message to the user
  // alert('Form submitted successfully! You will be contact soon');
  firebase.database().ref('user').set({
          name: name,
          email: email,
          mobileNo: mobileNo,
          message: message,
  }).catch(alert);
};

return( 
<div className={style.contactUsWrapper} id="contact">
  <h1>Contact Me</h1>
  <div className={style.wrapper}>
    <div className={style.leftSection}>
    <img src="/Images/webdesigndevelopment.webp" alt="animation"/>
    </div>
    <div className={style.rightSection}>
      <form>
        <input className={style.Email} type='string' name='name' value={name} placeholder='Your Name' onChange={handleName}/>
        <input className={style.Email} type='email' name='email' value={email} placeholder='Your Email' onChange={handleEmail}/>
        <input className={style.Email} type='number' name='mobileNumber' value={mobileNo} placeholder='Your Mobile Number' onChange={handleNumber}/>
        <textarea className={style.Email} type='string' name='message' value={message} placeholder='Your Message' rows={10} onChange={handleMessage}/>
        <button className={style.Button} type='submit' onSubmit={handleSubmit} >Submit</button>
      </form>
    </div>
  </div>
</div>
);
};
import React from 'react';
import style from "./styles.module.scss";

export const ContactUs = () => {

return(
<div className={style.contactUsWrapper} id="contact">
   <h1>Contact Me</h1>
   <div className={style.wrapper}>
<div className={style.leftSection}>
    <img src="/Images/webdesigndevelopment.webp" alt="animation"/>
</div>
<div className={style.rightSection}>
<form>
  <input className={style.Email} type='string' name='name' placeholder='Your Name' />
  <input className={style.Email} type='email' name='email' placeholder='Your Email'/>
  <input className={style.Email} type='number' name='mobileNumber' placeholder='Your Mobile Number'/>
  <textarea className={style.Email} type='string' name='message' placeholder='Your Message' rows={10}/>
  <button className={style.Button} type='submit'>Submit</button>
</form>
</div>
</div>
</div>
);
};
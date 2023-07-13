import React from 'react';
import style from "./styles.module.scss";

export const ContactUs = () => {

return(
<div className={style.contactUsWrapper}>
<div className={style.leftSection}>
    <img src="/Images/webdesigndevelopment.webp" alt="animation"/>
</div>
<div className={style.rightSection}>
<form>
  <input className={style.Email} type='string' name='name' placeholder='Enter Name' />
  <input className={style.Email} type='email' name='email' placeholder='Enter Email'/>
  <input className={style.Email} type='number' name='mobileNumber' placeholder='Enter Mobile Number'/>
  <input className={style.Email} type='string' name='message' placeholder='Enter Message'/>
  <button className={style.Button} type='submit'>Submit</button>
</form>
</div>
</div>
);
};
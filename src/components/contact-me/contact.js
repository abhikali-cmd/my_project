import React ,{useRef} from 'react';
import './contact.css';
import facebookicon from '../../assets/icons8-facebook-48.png';
import Leetcodeicon from '../../assets/leetcodeicon.png';
import linkedin from '../../assets/linkedin-icon.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fw0bz8b', 'template_gm2y2ib', form.current, 'Wa2PACAS1czJTlLfS')
      .then((result) => {
        console.log(result.text);
        alert('Email Send!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <section id='contactpage'>
        <h1 className='contactpagetittle'>Contact me</h1>
        <span className='contactDest'>Please fill out the form below for any work oppourtanity</span>
        <form action="#" className='contactform' ref={form}  onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='from_name'required/>
            <input type="email;" className='email' placeholder='Your Email'name='from_email'required/>
            <textarea className='msg' name="message" rows="5" placeholder='Your message' required></textarea>
            <button type='submit' className='submitbtn' value='Send'>Submit</button>
            <div className='links'>
                <a href="https://www.linkedin.com/in/abhishek-kumar-chongdar-38a894246/"><img src={facebookicon} alt="" className='link' /></a>
                <a href="https://leetcode.com/anup75224/"><img src={Leetcodeicon} alt="" className='link' /></a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-chongdar-38a894246/"><img src={linkedin} alt="" className='link' /></a>
            </div>
        </form> 
    </section>
  )
}

export default Contact;
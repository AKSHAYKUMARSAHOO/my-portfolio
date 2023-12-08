import React, {useRef} from "react";
import './contact.css';

import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uwgkvaj', 'template_4e7p5g8', form.current, '0HpGBk2PYciDOXCsS')
          .then((result) => {
              console.log(result.text);
              alert('email sent !');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className="secpage">
      <div className="clu">
        <h1 className="tite">About us</h1>
        <p className="para3">
          If you want to build a new app or a new website fully with React, we
          recommend picking one of the React-powered frameworks popular in the
          community. Frameworks provide features that most apps and sites
          eventually need, including routing, data fetching, and generating
          HTML.
        </p>
      </div>
      <div id="contact">
       <h1 className="titea">Contact me</h1>
       <span className="decs">please fill it!</span>
       <form className="from" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your name" name="your_name"/>
        <input type="email" className="email" placeholder="Your email" name="your_email"/>
        <textarea className="msg" name="message" rows="5" placeholder="What you Know"></textarea>
        <button type="submit" value="send" className="submitBtn">Submit</button>
       </form>
      </div>
    </section>
  );
};

export default Contact;

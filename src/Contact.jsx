import React from 'react';

function Contact() {
  return (
    <div className='contact' id='cont'>
      <div className='contact-container'>
        <p>GET IN TOUCH</p>
        <div className='contact-items'>
          <div className='left'>
            <form action="https://formspree.io/f/xleqpagg" method="POST">
              <input placeholder='Name' type='text' name="name" required className='form-input'/>
              <input placeholder='Email' type='email' name="_replyto" required className='form-input'/>
              <textarea name='message' placeholder='Your Message' className='form-textarea' required></textarea>
              <button type="submit" className='btn'>SUBMIT</button>
            </form>
          </div>
          <div className='right'>
            <div className='blob'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

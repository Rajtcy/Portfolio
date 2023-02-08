import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

toast.configure()
const Contact = () => {
  const form = useRef();

  // success toast 
  const notifySuccess = () => toast.success("Message sent successfully", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
  });

  // error toast 
  const notifyError = () => toast.error("Something went wrong", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wnbjjwe', 'template_1czwiny', form.current, 'PhhYgYHKVhxo-yFo5')
      .then(() => {
        notifySuccess()
      }, (error) => {
        notifyError(error)
      });

    // reset form field after submitting
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sarvath.work@gmail.com</h5>
            <a href="mailto:sarvath.work@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 8870593339</h5>
            {/* <a href="https://api.whatsapp.com/send?phone=8870593339" target="_blank" rel="noreferrer">Send a message</a> */}
            <a href="https://wa.me/918870593339/?text=Hi" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
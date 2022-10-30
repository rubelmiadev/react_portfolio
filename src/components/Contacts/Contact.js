import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c93ec7i",
      "template_1yoflxa",
      form.current,
      "Z2gDcpCT3CZCM1E9n"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <article className="contact_option">
          <AiOutlineMail className=" contact_option-icon " />
          <h4>Email</h4>
          <h5>mdrubelmia785@gmail.com</h5>
          <a href="mdrubelmia785@gmail.com" target="_blank" noreferrer="">
            Send a message
          </a>
        </article>
        <article className="contact_option">
          <RiMessengerLine className=" contact_option-icon " />
          <h4>Messenger</h4>
          <h5>RubelDev</h5>
          <a
            href="https://www.facebook.com/mdrubel.mia.35912/"
            target="_blank"
            noreferrer=""
          >
            Send a message
          </a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className=" contact_option-icon " />
          <h4>WhatsApp</h4>
          <h5>01814948574</h5>
          <a
            href="https://www.whatsapp.com/send?phone01793748560"
            target="_blank"
            noreferrer=""
          >
            Send a message
          </a>
        </article>

        {/* End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

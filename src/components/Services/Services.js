import React from "react";
import "./Services.css";
import { FiCheckCircle } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5>My Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* UX/UI Design Start */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* UX/UI Design End */}

        {/* Web Development Start */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* Web Development End  */}

        {/* Content Creations Start  */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <FiCheckCircle />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* Content Creations End  */}
      </div>
    </section>
  );
};

export default Services;

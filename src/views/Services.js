import React from "react";
import investors from "../images/investors.jpg";
import "./Service.css";

const Services = () => {
  return (
    <section className="service-page-container">
      <h1 className="service-title"> Services for Everyone </h1>
      <p className="service-paragraph">
        We offer services to help you unlock your untapped potential and become
        the person you want to be to achieve your dream.
      </p>

      <div className="service-unordered-list">
        <ul>
          <li>Live classes</li>
          <li>Learn in small groups or 1:1</li>
          <li>Free 3-day trial</li>
        </ul>
      </div>

      <section className="service-select">
        <h2 className="service-select-title"> Select Service to learn</h2>

        <div className="service-form">
          <form action="post">
            <select name="service" className="service-form-select">
              <option value="default"> Select Service</option>
              <option value="investment"> Investment </option>
              <option value="website"> Web Development </option>
              <option value="e-commerce"> Online Marketing </option>
              <option value="leadership"> Leadership </option>
            </select>
          </form>
          <button className="service-btn"> Get started </button>
        </div>

        <div className="service-image">
          <img src={investors} alt="Investor photo" />
        </div>
      </section>
    </section>
  );
};

export default Services;

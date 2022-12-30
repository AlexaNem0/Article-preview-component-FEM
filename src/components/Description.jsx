import React from "react";
import "./Description.css";
import Share from "./Share";
import Michelle from "../images/avatar-michelle.jpg";

const Description = () => {
  return (
    <div className="right">
      <h1>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="testimonial">
        <div className="info">
          <img src={Michelle} alt="/" />
          <div className="info-text">
            <h2>Michelle Appleton</h2>
            <p>28 Jun 2020 </p>
          </div>
        </div>
        <Share />
      </div>
    </div>
  );
};

export default Description;

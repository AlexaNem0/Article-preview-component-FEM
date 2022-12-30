import React from "react";
import "./Image.css";
import Img from "../images/drawers.jpg";

const Image = () => {
  return (
    <div className="img">
      <img src={Img} alt="" />
    </div>
  );
};

export default Image;

import React from "react";
import Description from "./Description";
import "./Card.css";
import Image from "./Image";

const Card = () => {
  return (
    <>
      <div className="container">
        <Image />
        <Description />
      </div>
    </>
  );
};

export default Card;

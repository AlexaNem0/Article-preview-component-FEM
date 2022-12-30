import React, { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import Facebook from "../images/icon-facebook.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Twitter from "../images/icon-twitter.svg";
import "./Share.css";
import Arrow from "../images/icon-share.svg";
const Share = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {!toggle ? (
        <div>
          <button
            className="arrow"
            type="submit"
            onClick={() => setToggle(true)}
          >
            <img src={Arrow} alt="" />
          </button>
        </div>
      ) : (
        <>
          <div className="share">
            <h2>SHARE</h2>
            <div className="list_container">
              <ul className="list">
                <li>
                  <a href="https://www.facebook.com/" target="blank">
                    <img className="list_a " src={Facebook} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="blank">
                    <img className="list_a " src={Pinterest} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="blank">
                    <img className="list_a " src={Twitter} alt="/" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className="active"
              type="submit"
              onClick={() => setToggle(false)}
            >
              <RiShareForwardLine className="icon" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Share;

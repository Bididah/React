import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Raiting = ({ value, text }) => {
  const starOne = value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : {};
  const starTow = value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : {};
  const starThree = value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : {};
  const starFoor = value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : {};
  const starFive = value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : {};
  return (
    <div>
      <FontAwesomeIcon icon={starOne} className="raiting" />
      <FontAwesomeIcon icon={starTow} className="raiting" />
      <FontAwesomeIcon icon={starThree} className="raiting" />
      <FontAwesomeIcon icon={starFoor} className="raiting" />
      <FontAwesomeIcon icon={starFive} className="raiting" />
      <span className="mx-2">{text}</span>
    </div>
  );
};

export default Raiting;

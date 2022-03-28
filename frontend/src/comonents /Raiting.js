import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Raiting = ({ value }) => {
  const starOne = value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : {};
  const starTow = value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : {};
  const starThree = value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : {};
  const starFoor = value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : {};
  const starFive = value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : {};
  return (
    <div>
      <FontAwesomeIcon icon={starOne} />
      <FontAwesomeIcon icon={starTow} />
      <FontAwesomeIcon icon={starThree} />
      <FontAwesomeIcon icon={starFoor} />
      <FontAwesomeIcon icon={starFive} />
    </div>
  );
};

export default Raiting;

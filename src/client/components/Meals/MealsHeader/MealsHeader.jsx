import React from "react";
import { Link } from "react-router-dom";
import "./MealsHeader.scss";

function MealsHeader() {
  return (
    <div className="meals-header">
      <div className="meals-wrapper">
        <div className="meals__logo">
          <Link to="/">
            <h2 className="text-large">dine</h2>
          </Link>
        </div>
        <div className="meals-info">
          <h2 className="text-large">Let us know what you like</h2>
          <p className="p-text">
            Whether it’s a romantic dinner or special date you’re celebrating
            with others we’ll look after you. We’ll be sure to mark your special
            date with an unforgettable meal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MealsHeader;

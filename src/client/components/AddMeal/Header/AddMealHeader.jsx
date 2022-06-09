import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./AddMealHeader.scss";

function MealHeader() {
  return (
    <header className="meal-header">
      <Link to="/">
        <h2 className="text-large">dine</h2>
      </Link>
      <div className="meal-header-cta">
        <h1 className="large-heading-text">Special requests?</h1>
        <p className="p-text">
          We can’t wait to host you. If you have any special requests please
          feel free to let us know about it here. We’ll be happy to accommodate
          you.
        </p>
        <Link to="/meals">
          <Button class="blackBg" title="browse our menu" />
        </Link>
      </div>
    </header>
  );
}

export default MealHeader;

import React from "react";
import "./Highlights.scss";

function HighlightMeal({ classname, title }) {
  return (
    <div className="highlight-meals">
      <div className="highlight-meals__imgs">
        <div className={`css ${classname}`}></div>
        <div className="meal-line" />
      </div>

      <div className="highlight-meals__info">
        <h2 className="text-medium">{title}</h2>
        <p>
          Our locally sourced salmon served with a refreshing buckwheat summer
          salad.
        </p>
      </div>
    </div>
  );
}

export default HighlightMeal;

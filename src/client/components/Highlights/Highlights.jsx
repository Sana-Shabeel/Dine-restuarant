import React from "react";
import pattern from "../../assets/patterns/pattern-divide.svg";
import HighlightMeal from "./HighlightMeal";
import "./Highlights.scss";

const meals = {
  salmon: "Seard Salmon Fillet",
  rosemary: "Rosemary Filet Mignon",
  summer: "Summer Chocolate Mousse",
};

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-content">
        <div className="highlights-content__info">
          <img src={pattern} alt="pattern" />
          <div>
            <h2 className="text-large">
              A few highlights from <br /> our menu
            </h2>
            <p className="p-text">
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favourites. Our menu is revamped every season.
            </p>
          </div>
        </div>
        <div className="highlights-meals-container">
          <HighlightMeal classname="salmon" title={meals.salmon} />
          <div className="divider-icon" />
          <HighlightMeal classname="rosemary" title={meals.rosemary} />
          <div className="divider-icon" />
          <HighlightMeal classname="summer" title={meals.summer} />
        </div>
      </div>
    </section>
  );
}

export default Highlights;

import React from "react";
import enjoyable from "../../assets/homepage/enjoyable-place-desktop.jpg";
import pattern from "../../assets/patterns/pattern-divide.svg";
import "./Article1.scss";
function Article1() {
  return (
    <article className="app__article1">
      <div className="app__article1-pattern-img"></div>
      <div className="app__article1-description">
        <img src={pattern} alt="pattern divide" />
        <h2 className="head-L-text">
          Enjoyable place <br /> for all the family
        </h2>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </article>
  );
}

export default Article1;

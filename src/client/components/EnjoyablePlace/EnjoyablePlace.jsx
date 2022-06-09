import React from "react";
import pattern from "../../assets/patterns/pattern-divide.svg";

import "./EnjoyablePlace.scss";
function EnjoyablePlace() {
  return (
    <section className="enjoyable">
      <div className="enjoyable__content">
        <div className="enjoyable__content-img"></div>

        <div className="enjoyable-content-info">
          <img src={pattern} alt="enjoyable pattern" />

          <div>
            <h2 className="text-large">
              Enjoyable place <br />
              for all the family
            </h2>

            <p className="p-text">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnjoyablePlace;

import React from "react";
import pattern from "../../assets/patterns/pattern-divide.svg";
import patternLine from "../../assets/patterns/pattern-lines.svg";

import "./LocallySourced.scss";
function LocallySourced() {
  return (
    <section className="locally">
      <div className="locally-sourced">
        <div className="locally-sourced__info">
          <img src={pattern} alt="pattern" />
          <div>
            <h2 className="text-large">
              The most locally <br />
              sourced food
            </h2>
            <p className="p-text">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
        <div className="locally-sourced__img">
          <img src={patternLine} alt="line pattern" />
        </div>
      </div>
    </section>
  );
}

export default LocallySourced;

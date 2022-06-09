import React from "react";
import pattern from "../../assets/patterns/pattern-divide.svg";
import lines from "../../assets/patterns/pattern-lines.svg";
import "./Article2.scss";

function Article2() {
  return (
    <section className="app__article2">
      <div className="app__article2-discription">
        <img src={pattern} alt="pattern divide" />

        <h2 className="head-L-text">
          The most locally <br />
          sourced food
        </h2>
        <p className="p-text">
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
      <div className="app__article2-bgImg">
        <img src={lines} alt="lines" />
      </div>
    </section>
  );
}

export default Article2;

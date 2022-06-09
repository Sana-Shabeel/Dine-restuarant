import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.scss";
function Header() {
  return (
    <header className="app__header">
      <div className="app__header-cta">
        <h2 className="text-large">dine</h2>
        <div className="app__header-cta__text">
          <h1 className="large-heading-text ">
            Exquisite dining <br /> since 1989
          </h1>
          <p className="p-text">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </div>
        <Link to="/meals">
          <Button class="blackBg" title="browse our menu" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

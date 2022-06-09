import React from "react";
import Button from "../../components/Button/Button";
import "./Header.scss";

function Header() {
  return (
    <header className="app__header">
      <div>
        <nav id="nav">
          <h2 className="head-L-text">dine</h2>
        </nav>
        <h1 className="head-XL-text">
          Exquisite dining <br />
          since 1989
        </h1>
        <p className="app__header-p p-text">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Button class="blackBg" />
      </div>
    </header>
  );
}

export default Header;

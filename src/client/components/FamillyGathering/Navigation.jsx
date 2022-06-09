import React from "react";
import { Link } from "react-router-dom";
import patternLine from "../../assets/patterns/pattern-lines.svg";
import Button from "../Button/Button";

import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="nav">
      <section className="nav__content">
        <div className="nav__content-img">
          <img src={patternLine} alt="pattern line" />
        </div>

        <div className="nav__content-info">
          <div className="nav-info">
            <div className="info">
              <h2 className="text-large">Family Gathering</h2>
              <p className="p-text">
                We love catering for entire families. So please bring everyone
                along for a special meal with your loved ones. We’ll provide a
                memorable experience for all.
              </p>
            </div>

            <Link to="/addmeal">
              <Button class="whiteBg" title="Add a meal" />
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;

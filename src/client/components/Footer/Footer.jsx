import React from "react";
import Button from "../Button/Button";
import Address from "./Address";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex">
        <h1 className="text-large">Ready to make a reservation?</h1>

        <Link to="/meals">
          <Button class="blackBg" title="browse our menu" />
        </Link>
      </div>
      <Address />
    </footer>
  );
}

export default Footer;

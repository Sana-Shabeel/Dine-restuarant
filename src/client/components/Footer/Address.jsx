import React from "react";
import "./Footer.scss";

function Address() {
  return (
    <div className="footer__contact">
      <div className="footer__contact-info">
        <h2 className="text-large">dine</h2>
        <div className="contact">
          <div className="address">
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div className="open-times">
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

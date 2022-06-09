import React, { useState } from "react";
import "../../AddMeal/Form/Form.scss";
import "./BookTable.scss";
import NumberInput from "../../AddMeal/Form/NumberInput";
import Modal from "../../Modal/Modal";

function BookTableForm() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };
  return (
    <div className="bkf-container">
      <h1 className="text-large">Book a table</h1>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <div className="book-table-form">
        <form>
          <div className="form__name">
            <input type="text" placeholder="Full name" required />
          </div>
          <div className="form__email">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="form__email">
            <input type="number" placeholder="Phone" required />
          </div>

          <NumberInput placeholder="Number of guests" />

          <div className="btn-container">
            <button type="submit" className="btn-submit" onClick={openModal}>
              BOOK TABLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookTableForm;

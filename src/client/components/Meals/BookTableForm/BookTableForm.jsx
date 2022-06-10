import React, { useState } from "react";
import "../../AddMeal/Form/Form.scss";
import "./BookTable.scss";
import NumberInput from "../../AddMeal/Form/NumberInput";

function BookTableForm({ getData }) {
  const [guest, setGuest] = useState(0);
  const [inputValue, setInputValue] = useState({});

  const changeHandler = (e) => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const guestChangeHandler = (guest) => {
    setGuest(guest);
    setInputValue({
      ...inputValue,
      number_of_guests: guest,
    });
  };

  const openModal = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    getData(inputValue);
    // setInputValue("");
    console.log();
  };

  return (
    <div className="bkf-container">
      <h1 className="text-large">Book a table</h1>

      <div className="book-table-form">
        <form>
          <div className="form__name">
            <input
              type="text"
              placeholder="Full name"
              name="contact_name"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__email">
            <input
              type="text"
              placeholder="Email"
              name="contact_email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__email">
            <input
              type="number"
              placeholder="Phone"
              name="contact_phonenumber"
              onChange={changeHandler}
              required
            />
          </div>

          <NumberInput
            placeholder="Number of guests"
            setIncrement={guestChangeHandler}
            increment={guest}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn-submit"
              onClick={submitHandler}
            >
              BOOK TABLE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookTableForm;

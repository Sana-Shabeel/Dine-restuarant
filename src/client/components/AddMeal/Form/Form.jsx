import React, { useState } from "react";
import patterns from "../../../assets/patterns/pattern-lines.svg";
import "./Form.scss";
import NumberInput from "./NumberInput";

function Form() {
  const [mealData, setMealData] = useState();
  // const [increment, setIncrement] = useState(0);
  const [price, setPrice] = useState(0);
  const [serving, setServing] = useState(0);

  const changeHandler = (e) => {
    const value = e.target.value;
    setMealData({
      ...mealData,
      [e.target.name]: value,
    });
  };

  const priceChangeHandler = (price) => {
    setPrice(price);
    setMealData({
      ...mealData,
      price: price,
    });
  };
  const reservationsChangeHandler = (serving) => {
    setServing(serving);
    setMealData({
      ...mealData,
      max_reservation: serving,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(mealData);

    fetch("api/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mealData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="form-container">
      <img className="hidden" src={patterns} alt="lines" />
      <div className="form">
        <form>
          <div className="form__name">
            <input
              type="text"
              placeholder="Meal name"
              name="title"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__email">
            <input
              type="text"
              placeholder="Meal origin"
              name="location"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__textarea">
            <textarea
              name="description"
              rows="10"
              cols="50"
              placeholder="Meal description"
              onChange={changeHandler}
              required
            ></textarea>
          </div>

          <NumberInput
            placeholder="Servings"
            setIncrement={reservationsChangeHandler}
            increment={serving}
          />
          <NumberInput
            placeholder="Price"
            setIncrement={priceChangeHandler}
            increment={price}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn-submit"
              onClick={submitHandler}
            >
              SUBMIT MEAL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

import React, { useState, useEffect } from "react";
import plus from "../../../assets/icons/icon-plus.svg";
import minus from "../../../assets/icons/icon-minus.svg";
import { log } from "debug";

function NumberInput({ increment, setIncrement, placeholder }) {
  const [clicked, setClicked] = useState(false);

  const incrementHandler = () => {
    setIncrement(increment + 1);
    setClicked(false);
  };
  const decrementtHandler = () => {
    setIncrement(increment - 1);
    setClicked(false);
  };
  const changeHandler = () => {
    setClicked(true);
  };

  return (
    <div className="form__number">
      <img src={minus} onClick={decrementtHandler} alt="minus image" />
      {clicked ? (
        <input
          type="number"
          className="input__number"
          defaultValue={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
      ) : (
        <span className="input__number" onClick={changeHandler}>
          {increment == 0 ? placeholder : increment}
        </span>
      )}
      <img src={plus} onClick={incrementHandler} alt="plus image" />
    </div>
  );
}

export default NumberInput;

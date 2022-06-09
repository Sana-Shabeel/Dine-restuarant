import React, { useState, useEffect } from "react";
import plus from "../../../assets/icons/icon-plus.svg";
import minus from "../../../assets/icons/icon-minus.svg";
import { log } from "debug";

function NumberInput(props) {
  const [increment, setIncrement] = useState(0);
  const [clicked, setClicked] = useState(false);

  const incrementHandler = () => {
    setIncrement((prev) => prev + 1);
    setClicked(false);
    props?.setPrice(increment);
  };
  const decrementtHandler = () => {
    setIncrement((prev) => prev - 1);
    setClicked(false);
    props?.setPrice(increment);
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
          onChange={(e) => props.setPrice(e.target.value)}
        />
      ) : (
        <span className="input__number" onClick={changeHandler}>
          {increment == 0 ? props.placeholder : increment}
        </span>
      )}
      <img src={plus} onClick={incrementHandler} alt="plus image" />
    </div>
  );
}

export default NumberInput;

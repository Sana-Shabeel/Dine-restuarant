import React from "react";
import MealHeader from "./components/AddMeal/Header/AddMealHeader";
import Form from "./components/AddMeal/Form/Form";
import Address from "./components/Footer/Address";

function MealForm() {
  return (
    <>
      <MealHeader />
      <Form />
      <Address />
    </>
  );
}

export default MealForm;

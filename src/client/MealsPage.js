import React from "react";
import Address from "./components/Footer/Address";
import MealsHeader from "./components/Meals/MealsHeader/MealsHeader";
import Meals from "./components/Meals/Meal/Meals";

function MealsPage() {
  return (
    <>
      <MealsHeader />
      <Meals />
      <Address />
    </>
  );
}

export default MealsPage;

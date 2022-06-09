import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import "./Meal.scss";

function Meals() {
  const [menu, setMenu] = useState({ originalMenu: [], filteredMenu: [] });
  useEffect(() => {
    getMeals();
  }, []);

  function getMeals() {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        setMenu({ originalMenu: data, filteredMenu: data });
      });
  }

  const deleteMeal = (id) => {
    fetch(`api/meals/${id}`, { method: "DELETE" }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getMeals();
      });
    });
  };
  return (
    <div className="all-meals-container">
      {menu.filteredMenu.map((meal) => (
        <Meal meal={meal} key={meal.id} deleteMeal={deleteMeal} />
      ))}
    </div>
  );
}

export default Meals;

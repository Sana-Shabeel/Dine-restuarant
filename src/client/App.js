import React from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./components/Button/Button";

import "./App.scss";

import BookTableForm from "./components/Meals/BookTableForm/BookTable";
import Home from "./Home";
import MealForm from "./MealForm";
import MealsPage from "./MealsPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/addmeal" element={<MealForm />} />

        <Route exact path="/meals" element={<MealsPage />} />
        <Route path="meals/:mealId" element={<BookTableForm />} />
      </Routes>
    </>
  );
}

export default App;

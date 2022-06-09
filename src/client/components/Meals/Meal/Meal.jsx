import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BookTableForm from "../BookTableForm/BookTable";
import Modal from "../../Modal/Modal";

function Meal(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteMeal() {
    // props.deleteMeal(props.meal.id);
    setShowModal((prev) => !prev);
  }

  return (
    <>
      <Modal
        title="Warning!"
        message="Are you sure you want to delete this meal?"
        setShowModal={setShowModal}
        showModal={showModal}
        deleteMeal={props.deleteMeal}
        mealId={props.meal.id}
      />
      <div className="meal-container">
        <div className="logo">
          <h2 className="text-large">dine</h2>
        </div>
        <div className="meal-content">
          <div className="meal__header app__flex">
            <h2 className="title">{props.meal.title}</h2>
            <p className="p-text">DKK {props.meal.price}</p>
          </div>
          <div className="meal__description">
            <p>{props.meal.description}</p>
          </div>
          <div className="meal__footer app__flex" onClick={deleteMeal}>
            <div className="app__flex">
              <MdDeleteForever />
              <p>Remove meal</p>
            </div>

            <Link to={`/meals/${props.meal.id}`} element={<BookTableForm />}>
              <div className="book-table app__flex">
                <BsBookmarkPlusFill />
                <p>Book table</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meal;

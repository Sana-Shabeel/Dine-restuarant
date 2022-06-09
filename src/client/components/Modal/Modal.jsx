import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";
function Modal({
  showModal,
  setShowModal,
  title,
  message,
  deleteMeal,
  mealId,
}) {
  return (
    <>
      {showModal ? (
        <div
          className="background"
          onClick={() => {
            setShowModal((prev) => !prev);
            console.log("parent");
          }}
        >
          <div className="modal-content">
            <h2 className="text-large">{title}</h2>
            <p className="p-text">{message}</p>

            {/* <Button
              class="whiteBg"
              title="cancel"
              onClick={(e) => {
                console.log("child2");
                setShowModal((prev) => !prev);
              }}
            /> */}

            <button
              className="whiteBg"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal((prev) => !prev);
              }}
            >
              Cancel
            </button>

            <button
              className="red-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteMeal(mealId);
                setShowModal((prev) => !prev);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

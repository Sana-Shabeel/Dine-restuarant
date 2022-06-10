import React, { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import { Link, useParams } from "react-router-dom";
import BookTableForm from "./BookTableForm";

function BookTable() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: "",
    message: "",
  });
  const params = useParams();

  const getDataHandler = (inputValues) => {
    postData({
      meal_id: params.mealId,
      number_of_guests: Number(inputValues.number_of_guests),
      contact_phonenumber: Number(inputValues.contact_phonenumber),
      contact_name: inputValues.contact_name,
      contact_email: inputValues.contact_email,
    });
  };

  const postData = (reservation) => {
    console.log(reservation);
    fetch("/api/reservations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setModalMessage({
          title: "Success",
          message: `Reservation succesfully made for ${reservation.contact_name}`,
        });
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
        setModalMessage({
          title: "FAILED",
          message: `Could not send to database. Please make sure all the required fields are filled`,
        });
        setShowModal(true);
      });
  };
  console.log(modalMessage);
  return (
    <div className="booking-container">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={modalMessage.title}
        message={modalMessage.message}
        hideDeleteBtn
      />
      <Link to={"/meals"}>
        <h2 className="text-large logo-meal">dine</h2>
      </Link>
      <BookTableForm getData={getDataHandler} />
    </div>
  );
}

export default BookTable;

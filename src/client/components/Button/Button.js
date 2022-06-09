import React from "react";
import "./Button.scss";

export default function Button(props) {
  console.log(props.class);
  return <button className={`btn ${props.class}`}>{props.title}</button>;
}

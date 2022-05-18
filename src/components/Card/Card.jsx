import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h3>Prompt: {props.result.prompt} </h3>
      <br />
      <p>Response: {props.result.response} </p>
    </div>
  );
}

import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <p>Prompt: {props.result.prompt} </p>
      <br />
      <p>Response: {props.result.response} </p>
    </div>
  );
}

import React, { Component } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import "./App.css";
const { Configuration, OpenAIApi } = require("openai");

function App() {
  return (
    <div className="App">
      <header className="App-header">The Sneaky Robot</header>
      <Form />
      <Card />
    </div>
  );
}

export default App;

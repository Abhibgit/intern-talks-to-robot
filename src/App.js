import React, { Component } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  return (
    <div className="App">
      <header className="App-header">The Sneaky Robot</header>
      <Form />
      <Card />
    </div>
  );
}

export default App;

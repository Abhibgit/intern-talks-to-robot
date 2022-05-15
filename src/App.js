import React, { Component } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import "./App.css";
const { Configuration, OpenAIApi } = require("openai");

function App() {
  const configuration = new Configuration({
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);

  openai
    .createCompletion("text-curie-001", {
      prompt:
        "Use list comprehension to convert this into one line of JavaScript:\n\ndogs.forEach((dog) => {\n    car.push(dog);\n});\n\nJavaScript one line version:",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [";"],
    })
    .then((response) => {
      console.log(response);
    });
  return (
    <div className="App">
      <header className="App-header">The Sneaky Robot</header>
      <Form />
      <Card />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  const setResultInState = (incomingResult) => {
    setResults([...results, incomingResult]);
  };
  return (
    <div className="App">
      <header className="App-header">The Sneaky Robot</header>
      <br />
      <Form setResultInState={setResultInState} />
      {results
        .slice()
        .reverse()
        .map((result) => {
          return <Card result={result} />;
        })}
    </div>
  );
}

export default App;

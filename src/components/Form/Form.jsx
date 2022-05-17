import React from "react";
const { Configuration, OpenAIApi } = require("openai");

export default function Form(props) {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let ama = "";

  function handleSubmit(e) {
    e.preventDefault();

    openai
      .createCompletion("text-curie-001", {
        prompt: ama,
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: [";"],
      })
      .then((response) => {
        let result = { prompt: ama, response: response.data.choices[0].text };
        props.setResultInState(result);
      });
  }

  function handleChange(event) {
    ama = event.target.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ask Astro Boy:
        <input type="text" name="ama" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

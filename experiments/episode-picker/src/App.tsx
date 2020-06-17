import React from "react";
import "./App.css";
import { Store } from "./Store";

function App(): JSX.Element {
  const store = React.useContext(Store);
  return (
    <>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </>
  );
}

export default App;

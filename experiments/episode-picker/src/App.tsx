import React, { useEffect } from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;

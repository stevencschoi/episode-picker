import React from "react";

interface IState {
  episodes: [];
  favourites: [];
}

const state: IState = {
  episodes: [],
  favourites: [],
};
const Store = React.createContext(state);

function reducer() {
  // pass
}

function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={state}>{props.children}</Store.Provider>;
}

export { Store, StoreProvider };

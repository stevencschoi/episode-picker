import React, { lazy, useContext } from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

export default function Favourites(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}

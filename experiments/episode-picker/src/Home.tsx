import React, { lazy, useContext, useEffect } from "react";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

export default function Home() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props}></EpisodesList>
        </section>
      </React.Suspense>
    </>
  );
}

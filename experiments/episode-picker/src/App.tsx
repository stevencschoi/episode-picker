import React, { useEffect } from "react";
import "./App.css";
import { Store } from "./Store";
import { IEpisode, IAction } from "./interfaces";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    // check if episode is already in favourites
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>Favourite(s): {state.favourites.length}</div>
      </header>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props}></EpisodesList>
        </section>
      </React.Suspense>
    </>
  );
}

export default App;

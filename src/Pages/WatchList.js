import React, { Component } from "react";

import MovieList from "../Components/MovieList";

export default class WatchList extends Component {
  render() {
    return (
      <>
        <h4>Your Watchlist</h4>
        <MovieList></MovieList>
      </>
    );
  }
}

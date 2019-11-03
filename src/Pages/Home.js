import React, { Component } from "react";

import MovieCard from "../Components/MovieCard";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 home-list">
              <h4>Recently Released</h4>
              <div className="container">
                <MovieCard></MovieCard>
              </div>
              <button className="btn btn-warning btn-xs home-list-button">
                Load More
              </button>
            </div>
            <div className="col-12"></div>
            <div className="col-12 home-list">
              <h4>Top Rated Released</h4>
              <div className="container">
                <MovieCard></MovieCard>
              </div>
              <button className="btn btn-warning btn-xs home-list-button">
                Load More
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

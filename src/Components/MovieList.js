import React, { Component } from "react";
import moviePoster from "../Images/moviePoster.jpg";
import star from "../Images/star.jpg";

export default class MovieList extends Component {
  render() {
    return (
      <div className="card mb-3 movie-list-card" max-width="540px">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={moviePoster}
              className="card-img movie-list-card-img"
              alt="movie poster"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Movie Name</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="card-content">
                <img src={star} width="19" heigth="19" />
                <span> </span>
                4.0
              </div>
              <div className="movie-card-list-spacing"></div>
              <div className="card-content">
                <button
                  className="btn btn-outline-warning btn-sm card-link col-sm-7"
                  type="button"
                >
                  Add to Watch List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

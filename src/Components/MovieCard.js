import React, { Component } from "react";
import moviePoster from "../Images/moviePoster.jpg";
import star from "../Images/star.jpg";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="card movieCard">
        <img
          src={moviePoster}
          className="card-img-top"
          alt="Movie Image"
          height="240"
        />
        <div className="card-body">
          <p className="card-text card-text-margin">
            <small className="text-muted director-name-small">
              Director Name
            </small>
          </p>
          <h5 className="card-title card-text-margin movie-name-small">
            Movie Name
          </h5>
        </div>
        <div className="card-footer">
          <div className="row">
            <button
              className="btn btn-outline-warning btn-sm card-link col-sm-7"
              type="button"
            >
              Add to Watch List
            </button>
            <div className="ratings col-sm-4 offset-sm-1">
              <img src={star} width="19" heigth="19" />
              <span> </span>
              4.0
            </div>
          </div>
        </div>
      </div>
    );
  }
}

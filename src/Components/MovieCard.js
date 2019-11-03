import React, { Component } from "react";
import moviePoster from "../Images/moviePoster.jpg";
import star from "../Images/star.jpg";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="card movieCard">
        <img src={moviePoster} className="card-img-top" alt="Movie Image" />
        <div className="card-body">
          <p className="card-text">
            <small className="text-muted">Director Name</small>
          </p>
          <h5 className="card-title">Movie Name</h5>
        </div>
        <div className="card-body">
          <h6>Release Date</h6>
          <p>55/45/45</p>
          <h6>Genre</h6>
          <p>Drama, Romance</p>
        </div>
        <div className="card-footer">
          <button
            classNameName="btn btn-warning btn-sm card-link"
            type="button"
          >
            Add to Watch List
          </button>
          <div className="ratings">
            <img src={star} width="19" heigth="19" />
            4.0
          </div>
        </div>
      </div>
    );
  }
}

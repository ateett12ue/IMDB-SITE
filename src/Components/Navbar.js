import React, { Component } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-primary bg-primary">
        <div className="navbar-brand" href="#">
          <Link to="/">
            <img src={logo} alt="IMDB LOGO" width="80" height="40" />
          </Link>
        </div>
        <Link to="/watchlist/" className="watchList">
          <button className="nav-item btn btn-warning" type="button">
            Watch List
          </button>
        </Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Here"
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

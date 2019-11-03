import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ListingPage from "./Pages/ListingPage";
import WatchList from "./Pages/WatchList";
import Error from "./Pages/Error";
import MovieCard from "./Components/MovieCard";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <MovieCard></MovieCard>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/watchlist/" component={WatchList} />
          <Route exact path="/listingpage/:slug" component={ListingPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
}

export default App;

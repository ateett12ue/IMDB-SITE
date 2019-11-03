import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ListingPage from "./Pages/ListingPage";
import WatchList from "./Pages/WatchList";
import Error from "./Pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watchlist/" component={WatchList} />
        <Route exact path="/listingpage/:slug" component={ListingPage} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

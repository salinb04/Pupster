import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import "bootstrap/dist/css/bootstrap.min.css"
import breedsArray from "./utils/searchAPI"

const App = () => {
  // Setting this.state.breedsArray to the breedsArray json array
  const [breedsListState, setBreedsListState] = useState(breedsArray)

  return (
    <div>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route
          path='/search'
          render={() => (
            <Search  breeds={breedsListState} />
          )}/>
      </div>
    </Router>
    </div>
  );
}



export default App;

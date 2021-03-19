import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
// import breedsArray from "./utils/searchAPI";
// import axios from 'axios';

const App = () => {
  // const [data, setData] = useState({ hits: [] });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://dog.ceo/api/breeds/list/all',
  //     );
 
  //     setData(result.data);
  //     console.log(setData(result.data));
  //   };
 
  //   fetchData();
  // }, []);
  

  // const setBreedsListStateHandler = () => {
  //   setData(breedsArray);
  // };

  return (
    <div>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        {/* <Route
          path="/search"
          render={() => <Search breeds={data.hits} />}
          /> */}
      </div>
    </Router>
    </div>
  );
};

export default App;

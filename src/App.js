import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
      <Router>
          <div className="app">
              <Header/>
              <Switch>
                  <Route path={'/search'}>
                      <SearchPage/>
                  </Route>
                  <Route path={'/'}>
                      <Home/>
                  </Route>

              </Switch>

              <Footer/>

          </div>
      </Router>

  );
}

export default App;

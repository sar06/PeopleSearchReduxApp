import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMain from './components/SearchMain';
import SearchDetails from './components/SearchDetails';
import { Switch, Route } from "react-router";
import { Redirect, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App"><BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route
          path="/home"
          render={props => {
            return <SearchMain  />;
          }}
        />
        <Route
          path="/searchdetails/:name"
          render={props => {
            return <SearchDetails  {...props}  />;
          }}
        />
      </Switch>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;

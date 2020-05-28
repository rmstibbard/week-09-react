import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Fragment from "./components4/Fragment";
import Header from "./components4/Header";
import Content from "./components4/Content";
import Figure from "./components4/Figure";

const App = () => (
  <Router>
    <Fragment>
      <Header>App</Header>
      <Route exact path="/" component={Content}>This is the content</Route>

      <Route path="/figure">
        <Figure
          caption="A cat, strutting its stuff!"
          src="https://goo.gl/tRdW93"
        />
      </Route>

    </Fragment>
  </Router>
);

export default App;

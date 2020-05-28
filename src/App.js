import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Fragment from "./components4/Fragment";
import Header from "./components4/Header";
import Content from "./components4/Content";
import Figure from "./components4/Figure";
import FourOhFour from "./components4/FourOhFour";
import Cats from "./components4/Cats";
import Fields from "./components4/Fields";

import Progress from "./components5/Progress";
import CatchMe from "./components5/CatchMe";


const App = () => (
  <Router>
    <Fragment>
      <Header>App</Header>

      <Switch>

        <Route exact path="/" component={Content}>This is the content</Route>

        <Route exact path="/progress" component={Progress} />

        <Route exact path="/catch-me">
          <CatchMe jump={100} />
        </Route>

        <Route exact path="/fields">
          <Fields
            fields={["First Name", "Last Name", "Email"]}
          />
        </Route>

        <Route exact path="/figure">
          <Figure
            caption="A cat, strutting its stuff!"
            src="https://goo.gl/tRdW93"
          />
        </Route>

        <Route exact path="/cats/:id" render={({ match }) => (
          <Cats cat={match.params.id} />
        )} />

        <FourOhFour />

      </Switch>

    </Fragment>
  </Router >
);

export default App;

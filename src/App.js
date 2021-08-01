import React, { Component } from "react"
import Home from "./Components/Home";
import Filmes from "./Components/Filmes";
import Series from "./Components/Series";
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Fundo = styled.div`
background:#000000;
`
const Ul = styled.ul`
list-style:none;
font-size:30px;
display: flex;
justify-content:space-around;
margin:0%;
padding:0%;
`


class App extends Component {
  render() {
    return(
      <Router>
      <Fundo>
        <nav>
          <Ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Filmes">Filmes</Link>
            </li>
            <li>
              <Link to="/Series">Series</Link>
            </li>
          </Ul>
        </nav>

        <Switch>
          <Route path="/Series">
            <Series />
          </Route>
          <Route path="/Filmes">
            <Filmes />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Fundo>
    </Router>
 
    );
  }
}

export default App;

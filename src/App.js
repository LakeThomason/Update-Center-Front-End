import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import LandingPage from "./LandingPage";
import "./App.css";

const network = require("./network");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { banks: [] };
  }

  componentDidMount() {
    // Gets all the banks and their accompanying mongo documents, sets to state
    network.getBanks(this);
  }

  render() {
    return (
      <Container>
        <Row>
          <LandingPage data={this.state.banks} />
        </Row>
      </Container>
    );
  }
}

export default App;

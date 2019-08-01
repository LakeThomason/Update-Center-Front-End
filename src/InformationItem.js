import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Jumbotron, Input } from "reactstrap";
// import "./App.css";

const network = require("./network");

let text = ` Welcome to the Domestic Violence Update Center! Use this resource to
stay current with Domestic Violence related legislation, guidelines,
or case law. \n

The DV Update Center is accessible directly from the
POST Learning Portal as well as from within any of the POST
Self-Paced Domestic Violence courses on the Learning Portal. Let us
know what you think! Is the DV Update Center useful for you? Do you
have any suggestions to make it better? Contact Catherine
Bacon-Davis with your feedback at cbacon@post.ca.gov or by phone at
(916) 227-454666.`;

class InformationItem extends Component {
  constructor(props) {
    super(props);
    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {
    this.setContent();
  }

  componentDidUpdate() {
    this.setContent();
  }

  setContent() {
    let div = document.getElementById("item");
    div.innerHTML = this.props.item.content;
  }

  render() {
    return (
      <Jumbotron id="informationItem">
        <h1 className="display-6">{this.props.item.name}</h1>
        <div id="item" />
      </Jumbotron>
    );
  }
}

export default InformationItem;

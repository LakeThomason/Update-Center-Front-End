import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  ListGroup,
  ListGroupItem
} from "reactstrap";
// import "./App.css";

const network = require("./network");

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 0
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Jumbotron id="categoryList">
        <h1 className="display-5">{this.props.bank.bank} Update Center</h1>
        <ListGroup>
          {this.props.bank.items.map((category, index) => {
            if (index === this.state.activeCategory) {
              return (
                <ListGroupItem
                  key={category + index}
                  active
                  tag="a"
                  href="#"
                  action
                >
                  {category.name}
                </ListGroupItem>
              );
            } else {
              return (
                <ListGroupItem
                  key={category + index}
                  tag="a"
                  href="#"
                  action
                  onClick={() => {
                    this.setState({ activeCategory: index });
                    this.props.setItem(category);
                  }}
                >
                  {category.name}
                </ListGroupItem>
              );
            }
          })}
        </ListGroup>
        <br />
        <Button color="info" onClick={() => this.props.back()} block>
          ← Back To Topics
        </Button>
      </Jumbotron>
    );
  }
}

export default CategoryList;

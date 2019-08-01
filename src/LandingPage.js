import React, { Component, Fragment } from "react";
import { Col, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";
import CategoryList from "./CategoryList";
import InformationItem from "./InformationItem";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (this.state.bank)
      return (
        <Fragment>
          <Col xs="5">
            <CategoryList
              bank={this.state.bank}
              back={() => this.setState({ bank: null })}
              setItem={item => this.setState({ item: item })}
            />
          </Col>
          <Col xs="7">
            <InformationItem item={this.state.item} />
          </Col>
        </Fragment>
      );
    else
      return (
        <Fragment>
          <Col>
            <Jumbotron>
              <h1 id="landingPage" className="display-6">
                Topics
              </h1>
              <ListGroup>
                {this.props.data.map(bank => {
                  return (
                    <ListGroupItem
                      key={bank.bank}
                      tag="a"
                      href="#"
                      action
                      onClick={() =>
                        this.setState({
                          bank: bank,
                          item: bank.items[0]
                        })
                      }
                    >
                      {bank.bank}
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </Jumbotron>
          </Col>
        </Fragment>
      );
  }
}

export default LandingPage;

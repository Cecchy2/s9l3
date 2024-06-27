import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        onClick={(e) => this.setState({ selected: !this.state.selected })}
        className={this.state.selected ? "selected-card" : ""}
      >
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.price} &euro;</Card.Text>
          <Card.Text>{this.props.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

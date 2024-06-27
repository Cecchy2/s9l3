import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    elementId: "",
    comment: "",
    rate: "",
  };

  ReviewSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <Form className="border border-dark m-t-2" onSubmit={this.ReviewSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="scrivi il tuo nome"
            value={this.state.elementId}
            onChange={(e) => this.setState({ elementId: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="lascia un comment"
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>
        <Form.Label htmlFor="select">Lascia un voto</Form.Label>
        <Form.Select id="select" value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComment;

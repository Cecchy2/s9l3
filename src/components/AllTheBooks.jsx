import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class AllTheBooks extends Component {
  state = {
    books: [],
    genre: "",
  };

  loadBooks = (genre) => {
    switch (genre) {
      case "fantasy":
        this.setState({ books: fantasy, genre });
        break;
      case "history":
        this.setState({ books: history, genre });
        break;
      case "horror":
        this.setState({ books: horror, genre });
        break;
      case "romance":
        this.setState({ books: romance, genre });
        break;
      case "scifi":
        this.setState({ books: scifi, genre });
        break;
      default:
        this.setState({ books: [], genre: "" });
    }
  };

  render() {
    const { books, genre } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Button variant="secondary" onClick={() => this.loadBooks("fantasy")}>
              Fantasy
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => this.loadBooks("history")}>
              History
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => this.loadBooks("horror")}>
              Horror
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => this.loadBooks("romance")}>
              Romance
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={() => this.loadBooks("scifi")}>
              Scifi
            </Button>
          </Col>
        </Row>
        <Row>
          {books.length > 0 ? (
            books.map((book, index) => (
              <Col key={index}>
                <Card style={{ width: "18rem", marginBottom: "1rem" }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Card.Text>{book.price}€</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>Please select a genre to display books.</p>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

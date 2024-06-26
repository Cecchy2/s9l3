import { Component } from "react";
import SingleBook from "./SingleBook";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    books: fantasy,
    searchBar: "",
  };

  handleFieldChange = (event) => {
    event.preventDefault();
    this.setState({ searchBar: event.target.value });
  };

  setFantasy = () => {
    this.setState({ books: fantasy });
  };
  setHistory = () => {
    this.setState({ books: history });
  };
  setHorror = () => {
    this.setState({ books: horror });
  };
  setRomance = () => {
    this.setState({ books: romance });
  };
  setScifi = () => {
    this.setState({ books: scifi });
  };

  render() {
    const filteredBooks = this.state.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchBar.toLowerCase())
    );
    console.log(filteredBooks);

    return (
      <Container>
        <Row>
          <Col>
            <Form className="text-start d-flex justify-content-center align-items-center">
              <Form.Group className="w-50" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Cerca il tuo libro"
                  value={this.state.searchBar}
                  onChange={this.handleFieldChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={this.setFantasy} className="m-4">
              Fantasy
            </Button>
            <Button variant="secondary" onClick={this.setHistory} className="m-4">
              History
            </Button>
            <Button variant="secondary" onClick={this.setHorror} className="m-4">
              Horror
            </Button>
            <Button variant="secondary" onClick={this.setRomance} className="m-4">
              Romance
            </Button>
            <Button variant="secondary" onClick={this.setScifi} className="m-4">
              SciFi
            </Button>
          </Col>
        </Row>
        <Row>
          {filteredBooks.map((book, index) => {
            return (
              <Col key={index}>
                <SingleBook img={book.img} title={book.title} price={book.price} category={book.category} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;

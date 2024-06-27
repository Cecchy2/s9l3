import React, { Component } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: "",
    recensioni: [], // Manteniamo questo per gestire le recensioni
  };

  fetchReviews = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjlhOTdjMjM5YzAwMTUyZjRiM2QiLCJpYXQiOjE3MTk0OTExNzAsImV4cCI6MTcyMDcwMDc3MH0.hWXOvdsqvExQltlx-3uMY51gcEWGWiG266VOOod96kU",
        },
      });
      if (resp.ok) {
        this.setState({ recensioni: await resp.json() });
      } else {
        throw new Error("Errore nel reperimento dei commenti");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchReviews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchReviews();
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CommentList recensioni={this.state.recensioni} />
            <AddComment />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;

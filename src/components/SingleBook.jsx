import { Card } from "react-bootstrap";

const SingleBook = (props) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.price} &euro;</Card.Text>
      <Card.Text>{props.category}</Card.Text>
    </Card.Body>
  </Card>
);

export default SingleBook;

import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import products from "../products";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { _id } = useParams();
  const product = products.find((p) => {
    return p._id === _id;
  });
  return (
    <>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            className="py-3"
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush"></ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductScreen;

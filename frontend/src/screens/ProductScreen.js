import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Image, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Raiting from "../comonents /Raiting";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);
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
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Raiting
                value={product.rating}
                text={`from ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: $ <strong>{product.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>description:{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>price</Col>
                <Col>{product.price}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  <strong>
                    {product.countInStock ? "In Stock" : "Out of Stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <Button className="btn-block" type="button">
              Add To Chart
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

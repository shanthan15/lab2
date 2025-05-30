import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import headphones from "../images/headphones.jpg";
import smartwatch from "../images/smartwatch.jpg";
import laptop from "../images/laptop.jpg";
import "./Products.css";

const productList = [
  {
    name: "Wireless Headphones",
    price: "$120",
    image: headphones,
  },
  {
    name: "Smart Watch",
    price: "$80",
    image: smartwatch,
  },
  {
    name: "Laptop",
    price: "$600",
    image: laptop,
  },
];

const Products = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <Button variant="outline-primary">Add Product</Button>
      </div>
      <Row>
        {productList.map((product, idx) => (
          <Col sm={12} md={4} key={idx} className="mb-4 d-flex">
            <Card className="w-100 h-100 d-flex flex-column">
              <div className="product-img-wrapper">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="product-img"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <div className="mt-auto">
                  <Button variant="warning" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;

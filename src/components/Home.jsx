import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import home from "../images/home.png";

const Home = () => {
  return (
    <div className="home-hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-light text-center text-md-start">
            <h1 className="fw-bold">Welcome to ProdManage</h1>
            <p className="mt-3">
              Effortlessly manage your products with our all-in-one tool.
              Create, view, edit, and delete products — fast, simple, and
              reliable.
            </p>
            <Button variant="light" className="mt-3">
              Explore Products
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={home}
              alt="Dashboard Illustration"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

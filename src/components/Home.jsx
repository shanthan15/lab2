import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import home from "../images/home.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-hero">
      <Container className="h-100">
        <Row className="align-items-center h-100">
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
            <img src={home} alt="Dashboard" className="img-fluid hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

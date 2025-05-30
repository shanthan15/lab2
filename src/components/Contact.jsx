import React from "react";
import { Card } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="text-center">
      <h2>Contact Us</h2>
      <Card className="mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <Card.Text>
            <strong>Address:</strong> 123 React Street, UI City, CA 90210
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> hello@prodmanage.com
          </Card.Text>
          <Card.Text>
            <strong>Phone:</strong> +1 (855) 123-4567
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;

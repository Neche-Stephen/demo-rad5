import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ContactPage.css';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container>
        <h2>Contact Us</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactPage;

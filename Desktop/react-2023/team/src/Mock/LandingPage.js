import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import NavBar from './Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
   <>
      <Container>
        <NavBar />
      </Container>
       <div className="landing-page">
        <Container>
          <Card>
            <Card.Body>
              <h1>Welcome to Receipt Generator</h1>
              <p>Create professional receipts for your clients in minutes.</p>
              <Button variant="primary" size="lg">Get Started</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
   </>
  );
};

export default LandingPage;



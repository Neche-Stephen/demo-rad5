import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../Navbar';
import { useState } from 'react';
import './LandingPage.css'



function LandingPage() {
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
        )

}

export default LandingPage;
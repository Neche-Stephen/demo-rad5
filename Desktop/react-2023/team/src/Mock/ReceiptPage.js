import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ReceiptPage = ({ customerName, amount }) => {
  return (
    <div className="receipt-page">
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Receipt Details</Card.Title>
            <Card.Text>
              <strong>Customer Name:</strong> {customerName}
            </Card.Text>
            <Card.Text>
              <strong>Amount:</strong> {amount}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ReceiptPage;

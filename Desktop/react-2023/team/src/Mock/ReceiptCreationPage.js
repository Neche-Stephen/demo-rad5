import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';

const ReceiptCreationPage = (props) => {
  const {
    customerName,setCustomerName,customerEmail,setCustomerEmail,
    itemName,setItemName,itemDescription,setItemDescription,itemPrice,setItemPrice,itemQty,setItemQty,
    items,setItems,
  } = props
  const navigate = useNavigate();

  const handleCustomerForm = (e) => {
    e.preventDefault();
    
  };

  const handleItemForm = (e) => {
    e.preventDefault();
   
  };

  const generateReceipt = (e) => {
    e.preventDefault();
    navigate('/receipt');
  };

  const overallTotal = () => {
    let overallTotal = 0;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        overallTotal += items[i].itemPrice * items[i].itemQty;
      }
    }
    return overallTotal;
  };
  

  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <div className="receipt-creation-page">
        <Container>
          <h2>Create Receipt</h2>
          <Form onSubmit={handleCustomerForm}>
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                placeholder="Enter customer name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Customer Email</Form.Label>
              <Form.Control
                type="email"
                name="customerEmail"
                placeholder="Enter customer email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>

          <h2>Add Item</h2>
          <Form onSubmit={handleItemForm}>
            <Form.Group controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formItemDescription">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="itemDescription"
                placeholder="Enter item description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formItemPrice">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="itemPrice"
                placeholder="Enter item price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formItemQty">
              <Form.Label>Item Quantity</Form.Label>
              <Form.Control
                type="number"
                name="itemQty"
                placeholder="Enter item quantity"
                value={itemQty}
                onChange={(e) => setItemQty(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Form>

          {items.length > 0 && (
            <div>
              <h2>Items Summary</h2>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Item Price</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.itemName}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.itemPrice}</td>
                      <td>{item.itemQty}</td>
                      <td>{item.itemPrice * item.itemQty}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4">Total Amount:</td>
                    <td>
                      {overallTotal}
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          )}

          <Button variant="primary" type="button" onClick={generateReceipt}>
            Generate Receipt
          </Button>
        </Container>
      </div>
    </>
  );
};

export default ReceiptCreationPage;

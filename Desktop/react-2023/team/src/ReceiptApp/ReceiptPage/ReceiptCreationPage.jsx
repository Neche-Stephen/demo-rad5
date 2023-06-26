import React, { useState } from 'react';
import { Container, Form, Button, Table, Col, Row } from 'react-bootstrap';
import NavBar from '../Navbar';
import { useNavigate } from 'react-router-dom';


function ReceiptCreationPage(props){
  const {
    customerName,setCustomerName,customerEmail,setCustomerEmail,
    itemName,setItemName,itemDescription,setItemDescription,itemPrice,setItemPrice,itemQty,setItemQty,
    items,setItems,
  } = props

    const navigate = useNavigate();
    const handleItemSubmit = (e)=>{
        e.preventDefault();
        const item = {
          itemName ,
          itemDescription,
          itemPrice,
          itemQty
        }
        setItems([...items, item])
        clearItems();
    }

  const clearItems = ()=>{
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemQty('')
  }

  // To calculate the item amount
  const itemTotalAmount =(price, qty)=> {
    return price * qty
  }

  // To calculate the overall total amount
  const itemsTotalAmount = (items) => {
    let overallTotal = 0;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        overallTotal += items[i].itemPrice * items[i].itemQty;
      }
    }
    return overallTotal;
  }

  //To generate Receipt
  const handleGenerateReceipt = () =>{
      navigate('/receipt')
  }

    return (
       <>
          <Container>
              <Row>
                {/* Forms */}
                <Col>
                     {/* Customer Details */}
                      <Form>
                          <Form.Group controlId="formCustomerName">
                          <Form.Label>Customer Name</Form.Label>
                          <Form.Control
                              type="text"
                              name="customerName"
                              placeholder="Enter customer name"
                              value = {customerName}
                              onChange={(e) => {
                                  setCustomerName(e.target.value)
                              }}
                          />
                          </Form.Group>

                          <Form.Group controlId="formCustomerEmail">
                          <Form.Label>Customer Email</Form.Label>
                          <Form.Control
                              type="email"
                              name="customerEmail"
                              placeholder="Enter customer email"
                              value = {customerEmail}
                              onChange={(e) => {
                                  setCustomerEmail(e.target.value)
                              }}
                          />
                          </Form.Group>

                      </Form>

                      {/* Item Details */}
                      <Form onSubmit={handleItemSubmit}>
                      <Form.Group controlId="formItemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="itemName"
                          placeholder="Enter item name"
                          value = {itemName}
                          onChange={(e) => {
                              setItemName(e.target.value)
                          }}
                        />
                      </Form.Group>

                      <Form.Group controlId="formItemDescription">
                        <Form.Label>Item Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="itemDescription"
                          placeholder="Enter item description"
                          value = {itemDescription}
                          onChange={(e) => {
                              setItemDescription(e.target.value)
                          }}
                        />
                      </Form.Group>

                      <Form.Group controlId="formItemPrice">
                        <Form.Label>Item Price</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          name="itemPrice"
                          placeholder="Enter item price"
                          value = {itemPrice}
                          onChange={(e) => {
                              setItemPrice(e.target.value)
                          }}
                        />
                      </Form.Group>

                      <Form.Group controlId="formItemQty">
                        <Form.Label>Item Quantity</Form.Label>
                        <Form.Control
                          type="number"
                          name="itemQty"
                          placeholder="Enter item quantity"
                          value = {itemQty}
                          onChange={(e) => {
                              setItemQty(e.target.value)
                          }}
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Add Item
                      </Button>
                    </Form>
                </Col>

                {/* Table */}
                <Col>
                <Table className='mt-5' striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Item Description</th>
                      <th>Item Price </th>
                      <th>Item Qty</th>
                      <th>Amount (NGN)</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      items.map((item) => {
                        return (
                          <tr>
                          <td>{item.itemName}</td>
                          <td>{item.itemDescription}</td>
                          <td>{item.itemPrice}</td>
                          <td>{item.itemQty}</td>
                          <td>{itemTotalAmount(item.itemPrice, item.itemQty)}</td>
                        </tr>
                        )
                      })

                    }
                   
                  
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>Total Amount</td>
                      <td>{itemsTotalAmount(items)}</td>
                    </tr>
                  </tfoot>
                </Table>
                <Button type = "button" onClick={handleGenerateReceipt}>Generate Receipt</Button>
                </Col>
              </Row>
             
          </Container>
       </>
    )




}

export default ReceiptCreationPage;
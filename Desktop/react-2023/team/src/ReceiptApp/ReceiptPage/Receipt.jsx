import React from 'react';
import { Container, Card, Row, Col, Table } from 'react-bootstrap';

const Receipt = (props) => {
    const {
        customerName,customerEmail,items
      } = props

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
  return (
    <div className="receipt-page">
      <Container>
        <Row className='justify-content-center mt-5'>
            <Col xs = '6'>
            <h1>Receipt Details</h1>
            <p>{customerName}</p>
            </Col>
        </Row>
        <Row className='justify-content-center '>
            <Col md = "6">
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
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Receipt;

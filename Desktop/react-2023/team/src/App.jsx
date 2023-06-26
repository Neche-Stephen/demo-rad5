import LandingPage from "./ReceiptApp/LandingPage/LandingPage";
import AboutPage from "./ReceiptApp/AboutPage/AboutPage";
import ContactPage from "./ReceiptApp/ContactPage/ContactPage";
import ReceiptCreationPage from "./ReceiptApp/ReceiptPage/ReceiptCreationPage";
import Receipt from "./ReceiptApp/ReceiptPage/Receipt";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App (){
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQty, setItemQty] = useState('');
  const [items, setItems] = useState([]);
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element = {<LandingPage />} />
                <Route path="/about" element = {<AboutPage />} />
                <Route path="/contact" element = {<ContactPage />} />
                <Route path="/create-receipt" element = {<ReceiptCreationPage 
                customerName = {customerName} setCustomerName = {setCustomerName}
                customerEmail = {customerEmail} setCustomerEmail = {setCustomerEmail}
                itemName = {itemName} setItemName = {setItemName}
                itemDescription = {itemDescription} setItemDescription = {setItemDescription}
                itemPrice = {itemPrice} setItemPrice = {setItemPrice}
                itemQty = {itemQty} setItemQty = {setItemQty}
                items = {items} setItems = {setItems}
                
                
                />} />
                <Route path="/receipt" element = {<Receipt  
                customerName={customerName}
                customerEmail = {customerEmail}
                items = {items}
                />} />

            </Routes>
      </BrowserRouter>
    )
}

export default App;
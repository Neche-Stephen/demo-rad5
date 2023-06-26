import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Mock/LandingPage";
import AboutPage from "./Mock/AboutPage";
import ContactPage from "./Mock/ContactPage";
import ReceiptCreationPage from "./Mock/ReceiptCreationPage";
import ReceiptPage from "./Mock/ReceiptPage";
import { useState } from "react";

const defaultCustomerDetails = {
    cName : '',
    cAddress: '',
    cEmail: '',
  };
const defaultItemDetails = {
    itemName : '',
    itemCost: '',
    itemQuantity: '',
    itemDescription : '',
    // itemId : uuid()
  };

function App (){
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQty, setItemQty] = useState('');
    const [items, setItems] = useState([]);
      
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/create-receipt" element={<ReceiptCreationPage  
                    customerName = {customerName} setCustomerName = {setCustomerName}
                    customerEmail = {customerEmail} setCustomerEmail = {setCustomerEmail}
                    itemName = {itemName} setItemName = {setItemName}
                    itemDescription = {itemDescription} setItemDescription = {setItemDescription}
                    itemPrice = {itemPrice} setItemPrice = {setItemPrice}
                    itemQty = {itemQty} setItemQty = {setItemQty}
                    items = {items} setItems = {setItems}
                    />}
                   
                    />

                <Route path="/receipt" element={<ReceiptPage 
                    
                />} />
            </Routes>
      </BrowserRouter>
    )
}

export default App;
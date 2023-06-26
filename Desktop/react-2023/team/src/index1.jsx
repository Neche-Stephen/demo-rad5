import {createRoot} from "react-dom/client";
// import App from "./App";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
    const [stocks, setStocks] = useState([]);
    useEffect(()=>{
        fetch("/shop-data.json")
        .then(response => {
            return response.json()
        })
        .then ( data => {
            console.log(data)
            setStocks(data)
        })
    })

    return (
        <>
            {stocks.map(stock => <img src={stock.imageUrl} />)}
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />)
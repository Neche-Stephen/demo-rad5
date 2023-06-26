import {createRoot} from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


// function App () {
//     const [products, setProducts] = useState([]);
//     fetch("/shop-data.json")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         // console.log(data);
//         setProducts(data)
//     })

//     return (
//             <>
//                 <h1>My Shop</h1>
//                 {
//                     products.map((product) =>{
//                         return <img key={product.id} src = {product.imageUrl}/>
//                     })
//                 }
//             </>

//     )

// }


const root = createRoot(document.getElementById('root'));
root.render(<App />)
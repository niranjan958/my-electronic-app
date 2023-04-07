import React, { useState } from 'react';
import './App.css';
import data from "./component/back/Data/Data";
import Header from "./component/front/Header/Header";
import Routing from "./component/front/Routing/Routing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './footer/Footer';



function App() {

  // const {productItems} = data;
  const [viewCartItems, setViewCartItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);


  const handleViewProduct = (product) => {
    const ProductExist = viewCartItems.find((item) => item.id === product.id);
     if (ProductExist) {
      setViewCartItems(viewCartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
      } else {
      setViewCartItems([...viewCartItems, { ...product, quantity: 1 }]);
      }
     }
  

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
     if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
      } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
     }
  

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      );
    }

  }
  const handleRemovingProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity  - 1 } : item)
      );
    }

  }

  const handleRemoveViewProduct = (product) => {
    const ProductExist = viewCartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setViewCartItems(viewCartItems.filter((item) => item.id !== product.id));
    }
    else {
      setViewCartItems(viewCartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      );
    }

  }

  const handleCartClear = () => {
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header 
        viewCartItems={viewCartItems}
        cartItems={cartItems} 
        />
        {/* <Banner /> */}
        <Routing

          // productItems={productItems} 
          viewCartItems={viewCartItems}
          handleViewProduct={handleViewProduct}
          handleRemoveViewProduct={handleRemoveViewProduct}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleRemovingProduct={handleRemovingProduct}
          handleCartClear={handleCartClear}

        />
        <Footer/>
        
      </Router>

    </div>
  );
}

export default App;

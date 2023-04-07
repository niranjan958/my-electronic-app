import React from 'react';
import Products from '../Products/Products';
import ViewCart from '../ViewCartItem/ViewCart';
import Cart from '../Cart/Cart';
import { Router, Routes, Route } from "react-router-dom";


const Routing = ({viewCartItems, handleViewProduct,handleRemoveViewProduct, cartItems, handleAddProduct, handleRemoveProduct,handleRemovingProduct, handleCartClear }) => {
  return (


    <div>
      <Routes>

        <Route path='/' exact element={<Products
          // productItems={productItems}
          handleViewProduct={handleViewProduct}
          handleAddProduct={handleAddProduct} />} />

          <Route path="/viewcartitem" element= {<ViewCart
          // cartItems={cartItems}
          // handleAddProduct={handleAddProduct}
          // handleRemoveProduct={handleRemoveProduct}
          // handleCartClear={handleCartClear}
              viewCartItems={viewCartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveViewProduct = {handleRemoveViewProduct}
          />}/>

        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleRemovingProduct={handleRemovingProduct}
          handleCartClear={handleCartClear} />} />

      </Routes>
    </div>
  )
};

export default Routing;

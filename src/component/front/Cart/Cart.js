import React from 'react'
import "./Card.css";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct,handleRemovingProduct, handleCartClear }) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='container'>
    <div className='car-item'>

      <h2 className='car-item-header'>Cart Items</h2>

      <div className='clearcart'>
        {cartItems.length >= 1 && (
          <button className='clear-button' onClick={handleCartClear}>Clear cart</button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className='car-item-empty'>No items are added </div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="car-item-list">

            <img className='car-item-image' src={item.image} alt={item.name} />

            <div className='car-item-name'> {item.title} </div>

            <div className='car-item-function'>
              <button className='car-item-add' onClick={() => handleAddProduct(item) > 1 }>+</button>
              <button className='car-item-remove' onClick={() => handleRemoveProduct(item) < 1 }>-</button>
              {/* <button className='cart-item-remove' onClick={() => handleRemoveProduct(item) < 1 }>-</button> */}
            </div>

            <div className='car-item-price'>
              {item.quantity} * ${item.price}
            </div>

          </div>
        ))}
      </div>

      <div className='car-item-total-price-name'>Total price

        <div className='car-item-total-price'>${totalPrice}</div>
      </div>
    </div>
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from 'react';
import Banners from '../../../Banner/Banners';
import "./Products.css";



// function Products({productItems, handleAddProduct}) {
//   return (
//     <div className='products'>
//      {productItems.map((productItem)=>(

//         <div className='card'>
//             <div>
//                 <img className="product-image"
//                 src={productItem.image}
//                  alt={productItem.name} />
//             </div>

//             <div>
//                 <h3 className="product.name"> {productItem.name}</h3>
//             </div>

//             <div>
//             <h3 className="product.price"> {productItem.price}</h3>
//             </div>

//             <div>
//                 <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
//             </div>

//         </div>
//      ))}
//     </div>
//   )
// }





function Products({ handleViewProduct,handleAddProduct }) {

  const [productItems, setProductItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(data => data.json())
      .then(data => { setProductItems(data) });
  }, []);


  return (
    <div className="container">

<Banners/>
<div className='products'>

{
  (productItems) ?

    productItems.map((productItem) => {
      return (
        <div className='card'>
          <div>
            <img className="product-image"
              src={productItem.image}
              alt={productItem.title} />
          </div>

          <div>
            <p className="product.title"> <span >{productItem.title}</span></p>
          </div>

          <div>
            <p className="product.price"> ${productItem.price}</p>
          </div>

          {/* <div>
            <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>
              View cart</button>
          </div> */}

          <div>
            <button className="product-add-button" onClick={() => handleViewProduct(productItem)}>
              View cart</button>
          </div>

        </div>
      )
    }) : (<h2>Loading....</h2>)
}

</div>
    </div>
    
  );
}

export default Products;



// function Products({ handleAddProduct }) {

//   const [productItems, setProductItems] = useState(null);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products').then(data => data.json())
//       .then(data => { setProductItems(data) });
//   }, []);


//   return (
//     <div class="container">

// <div className='products'>

// {
//   (productItems) ?

//     productItems.map((productItem) => {
//       return (
//         <div className='card'>
//           <div>
//             <img className="product-image"
//               src={productItem.image}
//               alt={productItem.title} />
//           </div>

//           <div>
//             <p className="product.name"> <span >{productItem.title}</span></p>
//           </div>

//           <div>
//             <p className="product.price"> ${productItem.price}</p>
//           </div>

//           <div>
//             <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>
//               Add to Cart</button>
//           </div>

//         </div>
//       )
//     }) : (<h2>Loading....</h2>)
// }

// </div>
//     </div>
    
//   )
// }

// export default Products;



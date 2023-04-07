import React from 'react';
import { Link } from 'react-router-dom';
import "./Title.css";

function Header({ viewCartItems, cartItems }) {
    return (

        <div class="container">
                <div className='row-thrill'>
            <div className='col-m-8'>
                       <h1>
                            <Link to="/" className='leo'>Thunder Store</Link>
                        </h1>
                    </div>
                    
                    <ul className='list'>
                    <div className='col-m-2'>
                    
                            <li className="vijay">
                                <Link className="ajith" to="/viewcartitem">ViewCart
                                <span className='cart-lens'>
                                        {viewCartItems.length === 0 ? " " : viewCartItems.length}
                                    </span>
                                </Link>
                                </li>
                        
                            </div>
                          </ul>
                          <ul>
                    <div className='col-m-2'>
                        
                            <li className='vijay'>
                                <Link className="thunivu" to="/cart">
                                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>

                                    <span className='cart-lens'>
                                        {cartItems.length === 0 ? " " : cartItems.length}
                                    </span>
                                </Link>
                            </li>
                              
                        </div>

                        </ul>
                </div>


        </div>

//         <div className="mainsection1">
//     <nav className="navbar navbar-expand-lg bg-dark">
//       <div className="container-fluid ">
        
//         <Link to="/" className="navbar-brand kill">Thunder Store</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">


//           <ul className="navbar-nav thrill">
//             <li className="nav-item ">
              
//                   <Link className="nav-link active " aria-current="page" to="/viewcartitem">
//                     ViewCart</Link>
//             </li>

//             <li className="nav-item">
              
//               <Link className="nav-link killer" to="/cart">
//                <i className="fa-sharp fa-solid fa-cart-shopping"></i>

//               <span className='cart-length'>
//                {cartItems.length === 0 ? " " : cartItems.length}
//                </span>
//               </Link>
//             </li>
    
            
//           </ul>
//         </div>
//       </div>

//     </nav>
//   </div>



// <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link active" aria-current="page" href="#">Home</a>
//         <a class="nav-link" href="#">Features</a>
//         <a class="nav-link" href="#">Pricing</a>
//         <a class="nav-link disabled">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
        );
}

export default Header

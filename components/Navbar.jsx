import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">

      <header className="header">

        <p className="logo">
          <Link href="/" className="logo">FS Pharmacy</Link>
        </p>

        <nav className="navbar">
          <a href="/">home</a>
          <a href="/#services">products</a>
          <a href="/#about">How to use</a>
          <a href="/#footer">contact us</a>
        </nav>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

      </header>

    </div>
  )
}

// const Navbar = () => {
//   return (
//     <header class="header">

//     <a href="#" class="logo"> <i class="fas fa-heartbeat"></i> FS Pharmacy</a>

//     <nav class="navbar">
//         <a href="/">home</a>
//         <a href="/#services">products</a>
//         <a href="/#about">How to use</a>
//         <a href="/#footer">contact us</a>
//     </nav>

//     <div id="menu-btn" class="fas fa-bars"></div>

// </header>
//   )
// }

export default Navbar
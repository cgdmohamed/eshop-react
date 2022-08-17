import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className="header_logo">
        <box-icon name='store' type='solid' color="#FFFFFF" className="header_logoImage"></box-icon>
        <h2 className='header_logoTitle'>Mega Store</h2>
        </div>
        <div className="header_search">
        <input type="text" className='header_search' placeholder='Search for products' />
        <box-icon name='search-alt-2' color="#f9dc5c" className="searchIcon"></box-icon>
        </div>
        <div className="header_nav">
          <div className="nav_item">
            <span className='nav_itemOne'>Hello Guest</span>
            <span className='nav_itemTwo'>Sign in</span>
          </div>
          <div className="nav_item">
          <span className="nav_itemOne">Your</span>
          <span className="nav_itemTwo">Shop</span>
          </div>
          <div className="nav_item">
          <box-icon name='cart' color="#f9dc5c" className="nav_itemBasket"></box-icon>
          <span className="nav_itemTwo nav_basketCount">0</span>
          </div>
        </div>
        
    </div>
  )
}

export default Header
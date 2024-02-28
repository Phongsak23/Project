import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav>
      <nav>
        <div className="nav-container">
           <a href="Index.html">
            <img src="/images/EYoRTF7U0AI3L5p.jpg" alt="" className="logo" />
           </a>
            <div className="nav-profile">
           
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
            </li>
          
            </div>
        </div>
      </nav>
    </nav>
    <div className="main-menu">
     

        <a href="/Product" className="main-menu-content"><button  class="btn-1">จองโต๊ะ</button></a>
        <a href="/About" className="main-menu-content"><button  class="btn-1">ติดต่อ</button></a>
        <input type="text" className="searchbar" placeholder="Search..."/> 
        
    </div>
    </>
  );
};

export default Navbar;


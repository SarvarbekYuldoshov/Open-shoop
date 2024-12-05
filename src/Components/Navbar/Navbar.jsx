import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
       <div className='Navbar-container'>
           <div className='Navbar-mindle'>
                <ul className='Navbar-list'>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Cell Phones</a></li>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Computers&Laptop</a></li>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Tv&Video </a></li>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Asseccories</a></li>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Home appliance</a></li>
                    <li className='Navbar-item'><a className='Navbar-link' href="">Video Games&Consoles</a></li>
                </ul>
           </div>
       </div> 
    </div>
  )
}

export default Navbar
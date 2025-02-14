import React from 'react'
import {Link } from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
  <h1 className="title" onClick={() => navigate("/")}>FOODIE</h1>  
         <ul>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
            </li>
            <li>
           < Link to="/contact">Contact</Link>
            </li>
         </ul>

    </nav>
  )
}

export default Navbar

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <div className='Navbar'>
      { auth ? <ul className='nav-ul'>
        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/add">Add Product</Link></li>
        <li><Link className='link' to="/update">Update Product</Link></li>
        <li><Link className='link' to="/profile">Profile</Link></li>
        <li><Link className='link' onClick={logout} to="/signup">Logout  ({JSON.parse(auth).name})</Link></li>
        </ul>
        :
          <ul className='nav-ul item-right'>
           <li><Link className='link' to="/signup">Sign Up</Link></li>
           <li><Link className='link' to= "/login">Login</Link></li>
           </ul>
        }
   
    </div>
  );
};

export default Navbar;

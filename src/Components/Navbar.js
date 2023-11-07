import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import NavSearch from './NavSearch';
import { FaPlus } from 'react-icons/fa';
import Navfilestatus from './Navfilestatus';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css'
const Navbar = ({isLogin,onHandleClick,isAdmin,adminClick,word,handleInputChange,searchClick,logout,sortFileName,sortAuthorName,sortYear}) => {
    
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
  <Link className="navbar-brand" to="/" >HistotyOf<b style={{"color":"black"}}>Black</b>People</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    {/* <NavSearch> */}
    <div className="input-group ps-5" style={{"display":"flex"}} id="search-ontainer">
          <div  className="form-outline" id="search-container" style={{"display":"flex"}}>
            <input type="search" id="form1" className="form-control" placeholder='Search' value={word} onChange={handleInputChange} /> 
            <Link to='/filelist'>
            <FaSearch className='fas fa-search'style={{"color":"black"}} id="search-icon" onClick={searchClick} />
            </Link>
            
            
          
          </div>
          
        </div>

        
        {/* </NavSearch> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

 {isLogin?
  <ul className='navbar-nav ms-auto'>
    <li className='nav-item'>
        <Link className='nav-link' to='/adminlogin'>AdminLogIn</Link>
    </li>
    <li className='nav-item'>
        <Link className='nav-link' to="/signin">Login</Link>
    </li>
    <li className='nav-item'>
        <Link className='nav-link' to='/signup'>SignUp</Link>
    </li>
    <li class="nav-item px-20">
      <Link to="filelist">
      <a className="nav-link" onClick={sortAuthorName}>AllFiles</a> 
      </Link>
      
      </li>  
  </ul>
:


<ul className='navbar-nav ms-auto px-5'>
    {isAdmin &&
<li className='nav-item' style={{"marginRight":"20px","fontSize":"1.0em","display":"inline"}}>
        <Link className='nav-link' to="/adminaccess">Admin <span><FaPlus /></span></Link>
    </li>
}

 
      
    <Navfilestatus>
      <li class="nav-item dropdown">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        SortBy
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={sortYear}>Year</Dropdown.Item>
        <Dropdown.Item onClick={sortAuthorName}>Author Name</Dropdown.Item>
        <Dropdown.Item onClick={sortFileName}>File Name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

</li>
</Navfilestatus>
 
<li class="nav-item px-20">
      <Link to="filelist">
      <a className="nav-link" onClick={sortAuthorName}>AllFiles</a> 
      </Link>
      
      </li> 
    <li className='nav-item'>
        <Link onClick={logout} className='nav-link' to="signin">Logout</Link>
    </li>
    
 
  </ul>

}
  </div>

</nav>

    </div>
  )
 }

export default Navbar

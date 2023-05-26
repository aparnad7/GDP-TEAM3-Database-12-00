import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import NavSearch from './NavSearch';
import { FaPlus } from 'react-icons/fa';
import Navfilestatus from './Navfilestatus';

const Navbar = ({isLogin,onHandleClick,isAdmin,adminClick,word,handleInputChange,searchClick,logout}) => {
    
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
  <Link className="navbar-brand" to="/" >Database</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavSearch>
    <div className="input-group ps-5" style={{"display":"flex"}}>
          <div id="navbar-search-autocomplete" className="form-outline">
            <input type="search" id="form1" className="form-control" placeholder='Search' value={word} onChange={handleInputChange} />
          </div>
          <button type="button" className="btn btn-dark">
            <FaSearch className='fas fa-search' onClick={searchClick} />
          </button>
        </div>

        
        </NavSearch>
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

  </ul>
:


<ul className='navbar-nav ms-auto px-5'>
    {isAdmin &&
<li className='nav-item' style={{"marginRight":"230px","fontSize":"1.2em"}}>
        <Link className='nav-link' to="signin">Admin <span><FaPlus /></span></Link>
    </li>
}

<li class="nav-item px-20">
     <Navfilestatus>  <a className="nav-link" href="#">AllFiles</a></Navfilestatus> 
      </li>  
      <li className="nav-item">
       <Navfilestatus> <a className="nav-link ml-4" href="#">PDFFile</a></Navfilestatus>
      </li>
      <li className="nav-item">
       <Navfilestatus> <a className="nav-link" href="#">TextFile</a></Navfilestatus>
      </li>
    
<li className="nav-item dropdown">
  <Navfilestatus>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SortBy
        </a></Navfilestatus>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
  
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

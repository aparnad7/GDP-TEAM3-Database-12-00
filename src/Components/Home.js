import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = ({word,handleInputChange,searchClick}) => {
  return (
    
    <div className='Container'>
        
        <h2 className='title'></h2> 
        <div className="input-group md-form form-sm form-2 pl-0 ">
            
  <input className="form-control my-0 py-2 amber-border" type="text" placeholder="Search" aria-label="Search" value={word} onChange={handleInputChange}  />
  <div className="input-group-append">
  <span className="input-group-text amber lighten-4" id="basic-text1" style={{"width:":"100px","height":"50px","backgroundColor":"green"}}><Link onClick={searchClick}  to="/filelist
  "><FaSearch style={{"color":"white"}}  /></Link></span>
  </div>
    </div>  
</div>


  )
}

export default Home

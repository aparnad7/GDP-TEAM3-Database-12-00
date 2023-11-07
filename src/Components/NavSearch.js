import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavSearch = ({children}) => {
    const [staus,setStatus]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        console.log(location.pathname)
        if((location.pathname === '/')||(location.pathname === '/signin')||(location.pathname === '/signup')||((location.pathname === '/adminlogin'))||(location.pathname==='/adminaccess'))
        {
            setStatus(false)
        }
        else
        {
            setStatus(true)
        }
    },[location])
  return (
    <div>
      {staus && children}
    </div>
  )
}

export default NavSearch

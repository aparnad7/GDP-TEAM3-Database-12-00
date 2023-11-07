import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarStatus = ({children}) => {
     const [staus,setStatus]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        console.log(location.pathname)
        if((location.pathname === '/')||(location.pathname === '/signup')||(location.pathname === '/signin')||
        (location.pathname === '/adminlogin')||(location.pathname === '/filelist')||(location.pathname==='/adminaccess')||(location.pathname==='/verify')||(location.pathname==='/adminverify'))
        {
            setStatus(true)
        }
        else
        {
            setStatus(false)
        }
    },[location])
  return (
    <div>
      {staus && children}
    </div>
  )
}

export default NavbarStatus

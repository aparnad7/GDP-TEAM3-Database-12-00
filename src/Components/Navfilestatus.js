import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navfilestatus = ({children}) => {
    const [staus,setStatus]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        console.log(location.pathname)
        if((location.pathname === '/')||(location.pathname === '/signin')||(location.pathname === '/signup')||(location.pathname === '/adminlogin'))
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

export default Navfilestatus

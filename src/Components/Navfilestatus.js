import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navfilestatus = ({children}) => {
    const [staus,setStatus]=useState(false)
    const location=useLocation()
    useEffect(()=>{
        console.log(location.pathname)
        if((location.pathname === '/'))
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

import React, { useState } from 'react'
import '../Signin/Verify.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const AdminVerify = ({setLogins,setAdmin}) => {

    const[otp,setOtp]=useState('')

    const navigate=useNavigate();
    const onSubmitHandler=(e)=>{
          e.preventDefault();
          axios.get("https://app-miok.onrender.com/adminverify",{
           params:{
            otp:otp
           } 
          }).then(res=>{
            if (res.data) {
              setLogins(false)
                setAdmin(true)
              navigate("/filelist")
            } else {
              // Handle incorrect credentials
              navigate('/adminlogin')
              console.log('Invalid credentials');
            }
        
          })}
  return (
    <div className="wrapper fadeInDown" >
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>Otp verification</h2>
    </div>
       
    <form onSubmit={onSubmitHandler}>
      <input type="password" id="login" className="fadeIn second" name="login" value={otp} placeholder="Enter OTP to Verify"  onChange={(e) => setOtp(e.target.value)}/>
      <input  type="submit" className="fadeIn fourth" value="Verify" />
    </form>
    
   
    <div id="formFooter">
      Send OTP again <Link className="underlineHover" >Send OTP</Link> here
    </div>

  </div>
</div>
  )
  }

export default AdminVerify

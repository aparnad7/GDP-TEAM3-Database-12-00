import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const AdminSignin = ({admind,name,onHandleClick,adminClick,setAdmin,setLogins,sortAuthorName}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     const navigate=useNavigate();
    const onSubmitHandler=(e)=>{
          e.preventDefault();
           axios.get("http://localhost:8080/get",{
            params:{
              email:email,
              password:password
            }
           }).then(res=>{
            if (res.data) {
              sortAuthorName()
              navigate("/adminverify")
            } else {
              // Handle incorrect credentials
              console.log('Invalid credentials');
            }
          })
          //.then(res=>{
          //   if (email === res.data.email && password === res.data.password) {
          //     navigate("/filelist")
          //     setLogins(false)
          //     setAdmin(true)
          
          //   } 
          //  })
          
        //   let i=0
        //   for(i=0;i<admind.length;i++)
        //   {
        //   if (email === admind[i].email && password === admind[i].password) {
        //     navigate("/")
        //     setLogins(false)
        //     setAdmin(true)
        //   break;
        //   } 
        // }
          

    }
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2> Admin Login Form</h2>
    </div>
       
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <input type="text" id="login" className="fadeIn second" name="login" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}  />
      <input type="password" id="password" className="fadeIn third" name="login" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
      <input  type="submit" className="fadeIn fourth" value="LogIn" />
    </form>
    
   
    

  </div>
</div>
  )
}

export default AdminSignin


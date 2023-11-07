import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signin = ({user,isLogin,setLogins,sortAuthorName}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     const navigate=useNavigate();
    const onSubmitHandler=(e)=>{
          e.preventDefault();
          axios.get("https://app-qc1f.onrender.com/get",{
           params:{
            email:email,
            password:password
           } 
          }).then(res=>{
            if (res.data) {
              // setLogins(false)
             sortAuthorName()
              navigate("/verify")
            } else {
              // Handle incorrect credentials
              console.log('Invalid credentials');
            }
          })
          // if (email === user.email && password === user.password) {
          //   setLogins(false)
          //   navigate("/")
          // } else {
          //   // Handle incorrect credentials
          //   console.log('Invalid credentials');
          // }
          

    }

    
  return (
    
    <div className="wrapper fadeInDown" >
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>Login Form</h2>
    </div>
       
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <input type="text" id="login" className="fadeIn second" name="login" value={email} placeholder="Enter your Email"  onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="password" className="fadeIn third" name="login" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
      <input  type="submit" className="fadeIn fourth" value="Login" />
    </form>
    
   
    <div id="formFooter">
      Don't have an account <Link className="underlineHover" to="/signup">Signup</Link> here
    </div>

  </div>
</div>
  )
}

export default Signin


import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FaTrash, FaDownload, FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminSignin = ({admind,name,onHandleClick,adminClick,setAdmin,setLogins,sortAuthorName}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
     const navigate=useNavigate();
    const onSubmitHandler=(e)=>{
          e.preventDefault();
           axios.get("http://full-stack-backend-server-qa.eba-8sbtxdmm.us-east-1.elasticbeanstalk.com/get",{
            params:{
              email:email,
              password:password
            }
           }).then(res=>{
            if (res.data) {
              setLogins(false)
                setAdmin(true)
              sortAuthorName()
              navigate("/filelist")
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

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2> Admin Login Form</h2>
    </div>
       
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <input type="text" id="login" className="fadeIn second" name="login" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}  />
      <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="fadeIn third"
              name="login"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
      <input  type="submit" className="fadeIn fourth" value="LogIn" />
    </form>
    
   
    

  </div>
</div>
  )
}

export default AdminSignin


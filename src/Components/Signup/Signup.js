import React, { useState } from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signin = ({user,setUser}) => {
  const navigate=useNavigate()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();


     if(password===confirmPassword){
      axios.post("https://app-miok.onrender.com/add",{
        email:email,
        firstName:firstname,
        lastName:lastname,
        password:password
      }).then(res=>{
        alert(res)
        navigate("/signin")
      })
     }
     
    // Perform validation and other logic here

    // // Store sign-up details in a variable or make an API call to save them
    // const users = {
    //   firstname:firstname,
    //   lastname:lastname,
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword
    // };
    // setUser(users)
    //     console.log(users);
    //     navigate("/signin")
  };
  
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>SignUp Form</h2>
    </div>

    <form onSubmit={handleSignUp}>
      <input type="text" id="login" value={firstname} className="fadeIn second" name="login" placeholder="Enter your First Name" onChange={(e) => setFirstname(e.target.value)} />
      <input type="text" id="login" value={lastname} className="fadeIn second" name="login" placeholder="Enter your Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="text" id="login" value={email} className="fadeIn second" name="login" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" id="password" value={password} className="fadeIn third" name="login" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" id="password" value={confirmPassword}className="fadeIn third" name="login" placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <input type="submit" className="fadeIn fourth" value="SignUp" />
    </form>

   
    <div id="formFooter">
      Have an account <Link className="underlineHover" to="/signin">LogIn</Link> here
    </div>

  </div>
</div>
  )
}

export default Signin


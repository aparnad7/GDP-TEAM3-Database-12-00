import React from 'react'
import '../Signin/Signin.css'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>SignUp Form</h2>
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Enter your First Name" />
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Enter your Last Name" />
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Enter your Email" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="Enter your password" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="Confirm your password" />
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


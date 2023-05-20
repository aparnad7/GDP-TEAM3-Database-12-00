import React from 'react'
import '../Signin/Signin.css'
import { Link, useNavigate } from 'react-router-dom'

const Signin = ({name,onHandleClick}) => {
     const navigate=useNavigate();
    const onSubmitHandler=(e)=>{
          e.preventDefault();
          navigate('/filelist')

    }
  return (
    
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>Login Form</h2>
    </div>
       
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="Enter your Email" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="Enter your password" />
      <input onClick={onHandleClick} type="submit" className="fadeIn fourth" value="LogIn" />
    </form>
    
   
    <div id="formFooter">
      Don't have an account <Link className="underlineHover" to="/signup">SignUp</Link> here
    </div>

  </div>
</div>
  )
}

export default Signin


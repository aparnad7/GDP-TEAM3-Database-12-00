import React, { useState } from 'react';
 import './PopUpForm.css'// Import your CSS styles
 import { Link, redirect, useNavigate } from 'react-router-dom'
 import axios from 'axios';
function PopUpForm({ onClose, onSubmit,setAdmin,setLogins }) {
    const navigate=useNavigate();
  const [pdffile, setPdfFile] = useState(null);
  const [magazineName, setMagazineName] = useState('');
  const[year,setYear]=useState(0);
  const[textfile,setTextFile]=useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdffile', pdffile); // 'file' should match your server's expected field name
    formData.append('year', year);
    formData.append('magazineName',magazineName);
    formData.append('textfile', textfile);

    axios.post("https://app-qc1f.onrender.com/file/uploadfile",formData,{
        headers: {
          'content-type': 'multipart/form-data' // Set the content type to form-data
        },

        
    }).then(res=>{
      setAdmin(true)
      setLogins(false)
      console.log("hi")
        alert("uploaded successfully")
        
    }).catch(error => {
      console.error("Error:", error);
  });
    // Validate and submit the form data
    
    
  };

  return (
    <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <h2>Upload  Form</h2>
    </div>

    <form onSubmit={(e)=>handleSubmit(e)} encType="multipart/form-data">
      <input  type="file" id="login"  className="fadeIn second" placeholder="Pdf" name="login" onChange={(e)=>{setPdfFile(e.target.files[0])}}   />
      <input type="text" id="login" value={magazineName} className="fadeIn second" name="login" placeholder="Enter your Magazine Name" onChange={(e) => setMagazineName(e.target.value)} />
      <input type="number" id="login" min="1500" max="3000" value={year} className="fadeIn second" name="login" placeholder="Enter the year of file" onChange={(e)=>setYear(e.target.value)}  />
      <input type="file" className="fadeIn second" placeholder="Txt"   onChange={(e)=>{setTextFile(e.target.files[0])}} />
      <input type="submit"  className="fadeIn fourth"  />
    </form>

   
    {/* <div id="formFooter">
      Have an account <Link className="underlineHover" to="/signin">LogIn</Link> here
    </div> */}

  </div>
</div>
  );
}

export default PopUpForm;

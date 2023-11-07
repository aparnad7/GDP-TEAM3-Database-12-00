import React from 'react';
import './Footer.css'
function Footer() {
  return (
    // <footer className="footer mt-auto py-3">
    //   <div className="container-fluid p-1" style={{"backgroundColor":"green","color":"white"}}>
    //     <div className="row">
    //       <div className="col-md-6" style={{"display":"flex"}}>
    //         <h4 style={{"margin":"2px","padding":"2px"}}>Contact Us</h4>
    //         <p>Email: contact@example.com</p>
    //         <p>Phone: 123-456-7890</p>
    //       </div>
    //       <div className="col-md-6">
    //         <p className="text-end">&copy; {new Date().getFullYear()} Company Name</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer style={{"textAlign":"center","fontSize":"0.65em","clear":"left","backgroundColor":"#3d8c40","position":"relative"}}>
		<p>&copy; Copyright 2023. All Rights Reserved.</p>
		<p><a href="mailto:lessons@strikeachord.net" style={{"color":"black","textDecoration":"None"}}>historyofblackpeople@nwmissouri.edu</a></p>
	</footer>
  );

  
}

export default Footer;

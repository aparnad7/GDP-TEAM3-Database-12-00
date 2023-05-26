import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../FileList/FileList.css'
import { FiTrash } from 'react-icons/fi';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { FaDownload } from 'react-icons/fa';

import { RiDeleteBin2Line } from 'react-icons/ri';
const FileList = ({isAdmin,word,filelist}) => {
  //const[word,setWord]=useState('the')

 
  
   
  return (
    <div className='container-fluid'>
        {isAdmin &&
        <div className='border p-3 mt-5 shadow text-right'>
            <span>
        <span><input  type="file" /> </span> 
        
        <button type="button" class="btn btn-success float-right ml-2" id="button">Upload</button>
        </span>
        </div>
}

        <div className='border p-4 mt-4 shadow'>
            
              {filelist.length>0 && word.length>0 ?
                
                
                filelist.map((item,index)=>(
                 
                  <ul>  
            <div className="bg-light p-3 m-2">
                <li>
                  
                <Link className="pdffiles" target="_blank"  to={`/${item.fileName}`}>{item.fileName}</Link>
                {/* <iframe src={`/${item.fileName}`} title="Document" width="100%" height="500px">{item.fileName}</iframe> */}
                <Link className="download" target="_blank" to={`/${item.fileName}`} download > <FaDownload className='downloadicon' /></Link>
                
              {isAdmin &&  <FiTrash className='delete'></FiTrash>}
                </li>
                
                <div className=" bg-white border p-2 m-0  shadow">
                    <div className='p-3'><b style={{"fontSize":"1.5em","margin-right":"850px"}}>Text Found</b>
                    
                        </div>
                        <div className='texts' dangerouslySetInnerHTML={{ __html: item.fileText.replace(
    new RegExp(`\\b(${word})\\b`, 'gi'),
    match => `<span style="background-color: yellow">${match}</span>`
  ) }}></div>

             </div>
                </div>
                </ul> 
)):<div><h1>No file found</h1></div>}         
            
          
        </div>
    
    </div>
  )
}

export default FileList

import React from 'react'
import { Link } from 'react-router-dom'
import '../FileList/FileList.css'
import { FiTrash } from 'react-icons/fi';

import { RiDeleteBin2Line } from 'react-icons/ri';
const FileList = () => {
  return (
    <div className='container-fluid'>
        <div className='border p-3 mt-5 shadow text-right'>
            <span>
        <span>AllFiles</span>    
        <button type="button" class="btn btn-primary float-right ml-2" id="button">Upload</button>
        </span>
        </div>
        <div className='border p-4 mt-4 shadow'>
            <ul>
            <div class="bg-light p-3 m-2">
                <li>
                <Link className="pdffiles" to="/file">Sample Pdf file</Link>
                <FiTrash className='delete'></FiTrash>
                </li>
                <div className=" bg-white border p-2 m-0  shadow">
                    <div className='p-3'><b style={{"fontSize":"1.5em"}}>Text Found</b></div>
                <div>And more text. And more text. And more text. And more text. And moretext. And more text. <b>Boring</b>, zzzzz. And more text. And more text. Andmore text. And more text. And more text. And more text. And more text.And more text. And more text.</div>
                </div>
                </div>
                
            </ul>
          
        </div>
    
    </div>
  )
}

export default FileList

import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import '../FileList/FileList.css';
import { FaTrash, FaDownload, FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import {  FaArrowUp, FaArrowDown } from 'react-icons/fa';



const FileList = ({ isAdmin, word, isLoading, filelist, deleteClick }) => {
  const [isHidden, setIsHidden] = useState([]);
  const [isHide, setIsHide] = useState([]);
  const [keywords, setKeywords] = useState(['black', 'morris']);
  const[count,setCount]=useState(0);
  const paragraphRef = useRef(null);
  // const scrollKeywords=(e)=>{
  //   console.log(count)

  // }

  function HighlightKeywords({content,keywords,indexes}) {
    
    let highlightedContent=content
    
    // let l=0;
    // let f=0;
    // indexes.map(res=>{
    //   console.log(content.substring(res,res+5))
    //   console.log(res)
    //   highlightedContent=highlightedContent.substring(0,res)+`<font size="6"
    //   color="rgb(128, 128, 0)">Negro</font>`+highlightedContent.substring(res+5);
    //   //highlightedContent=highlightedContent.replace("Negro",`<b>Negro</b>`)
    // })
    // console.log(indexes.length)
    keywords.map((res)=>{
      let u='/'+res+'/'
      const regex = new RegExp(res, 'gi');
      highlightedContent = highlightedContent.replace(
        regex,
      
        match =>
           `<font>
           <span class="gt">
           ${match}
           </span>
           </font>`
        
      );
    })
    //const regexPattern = keywords.map(keyword => `\\b${keyword}\\b`).join('|');
    
  
     
  
    return <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
 
  
     }
  

  useEffect(() => {
    const a = new Array(filelist.length).fill(false);
    const b = filelist.map((item) => new Array(item.pdfOutputs.length).fill(false));
    setIsHidden(a);
    setIsHide(b);
  }, [filelist]);

  const handleDelete = (filename) => {
    // For example, you can call it when a delete button is clicked
    deleteClick(filename);
  };

  const toggleHideBar = (inx) => {
    const newArray = [...isHidden];
    newArray[inx] = !newArray[inx];
    setIsHidden(newArray);
  };

  const hider = (inx, intx) => {
    const newArray = [...isHide];
    newArray[inx][intx] = !newArray[inx][intx];
    setIsHide(newArray);
  };

  return (
    <div className='container-fluid'>
      {isAdmin && (
        <div id="upload" className='border p-3 mt-5 shadow'>
          <Link to="/popupform">
            <button type="button" id="button">Upload <span><FaPlus /></span></button>
          </Link>
        </div>
      )}
      {isLoading ? <div><h3>Loading......</h3></div> : (
        <>
          {(filelist.length > 0 ) ? filelist.map((item, index) => (
            <div className='border p-4 mt-4 shadow' key={index}>
              <Link className="pdffiles" target="_blank" to={`/${item.filePath}`}>
            {item.filePath}
          </Link>
          <Link className="download" target="_blank" to={`/${item.filePath}`} download>
            <FaDownload className='downloadicon' />
          </Link>
          {isAdmin &&  <button type="button" className="btn btn-light"><FaTrash className='delete' onClick={() => handleDelete(`${item.magazineName}`)}></FaTrash> </button>}
  
          <div style={{ display: 'inline-block', marginRight: '30px', marginLeft: '30px',color:'#198754' }}>
            Magazine Name: {item.magazineName}
          </div>
          <div style={{ display: 'inline-block', marginRight: '30px', marginLeft: '30px',color:'#198754' }}>
            Year: {item.year}
          </div>
        
          {Object.keys(item.finalwords).map((x,y)=>(
            <div style={{ display: 'inline-block', marginRight: '30px', marginLeft: '30px',color:'#198754' }}>
            {x}:{item.finalwords[x]}
          </div>
		  
		  ))}

          
          <div style={{ display: 'inline-block' }}>
            <button onClick={()=>{toggleHideBar(index)}} className="toggle-button">
              {isHidden[index] ? <FaEye className="up" /> : <FaEyeSlash />}
            </button>
          </div>
              <div>
                {isHidden[index] && (
                  <div>
                    {item.pdfOutputs.map((output, ind) => (
                      <div>
                        <div className="bg-green">
                        <Link className="links" target="_blank" to={`/${output.path}`}>
                    {output.path}
                  </Link>
                  
                  <Link className="download" target="_blank" to={`/${output.path}`} download>
                    <FaDownload className='downloadicon' />
                  </Link>
                  {/* <input type="number" name="count" id="count" className="count" placeholder='count' value={count} onChange={(e) => {setCount(e.target.value)
                  scrollKeywords(e.target.value)
                  }} />  */}
                  {Object.keys(output.count).map((x,y)=>(
            <div style={{ display: 'inline-block', marginRight: '200px', marginLeft: '200px' }}>
            {x}:{output.count[x]}
          </div>
		  
		  ))}
                          <div style={{ display: 'inline-block' }}>
                            <button onClick={() => { hider(index, ind) }} className="toggle-button">
                              {isHide[index][ind] ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </div>
                        </div>

                        {isHide[index][ind] && (
                          <div className='border shadow' >
                            {/* <button onClick={()=>{HighlightKeywords(output.content)}}></button> */}
                            
                           <div ref={paragraphRef} className='con'> <HighlightKeywords content={output.content}keywords={Object.keys(output.count)} indexes={output.wordslist['negro']}  /></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )) : <div><h1>No file found</h1></div>}
        </>
      )}
    </div>
  );
};

export default FileList;

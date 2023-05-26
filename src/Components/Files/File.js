import React, { useState } from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import  FileViewer  from 'react-file-viewer';

const File = () => {
    const docs = '1910 Dec[2].pdf'
   

    

      
    
  return (
    <div>
        <h1>Documents</h1>
        <FileViewer fileType={''} filePath={docs}
        onError={(e) => console.log('Error:', e)}
        />
    </div>
  )
}

export default File

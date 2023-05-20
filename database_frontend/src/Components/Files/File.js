import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const File = () => {
    const docs = [
        { uri: require("../../files/sample.pdf"),
        FileType: "pdf",
        FileName:"sample"
     },
     { uri: require("../../files/Tools.pdf"),
        FileType: "pdf",
        FileName:"Tools"
     }
        
      ];
    
  return (
    <div>
        <h1>Documents</h1>
       <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:1000}} />;
    </div>
  )
}

export default File

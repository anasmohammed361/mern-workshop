export async function getDoc (id) {
    const respose =await fetch("/pdf/?id="+id)
    if ((respose).ok) {
      respose.blob()
      const url = URL.createObjectURL(pdfData);
      
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'your_notes.pdf'; // Specify the file name
    a.style.display = 'none'; // Hide the anchor element
    
    // Append the anchor to the document
    document.body.appendChild(a);
    
    // Simulate a click on the anchor to trigger the download
    a.click();
    
    // Remove the anchor element
    document.body.removeChild(a);
    
    // Revoke the URL to clean up resources
    URL.revokeObjectURL(url);
  }else{
    alert('error occured')
  }
  }
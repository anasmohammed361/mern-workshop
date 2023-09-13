import React, { useState } from 'react';

export const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

async function uploadDoc(){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('parent',"")
    try {
      const response = await fetch('/pdf', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully.');
      } else {
        console.error('File upload failed.');
      }
    } catch (error) {
      console.error('Error sending the request:', error);
    }
  };

  return (
    <div>
      <h2>File Uploader</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept='.pdf' />
        <button type="submit" disabled={!file}>Upload</button>
      </form>
    </div>
  );
};


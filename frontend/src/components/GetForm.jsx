import React, { useEffect, useState } from 'react';

export const PDFDownloader = () => {
  const [pdfData, setPDFData] = useState(null);

  useEffect(() => {
    // Replace 'pdfId' with the actual ID of the PDF document you want to fetch
    const pdfId = '6501d5932fd9b1419026773a';

    // Make a GET request to fetch the PDF content
    fetch(`/pdf/?id=${pdfId}`)
      .then(async(response) => {
        if (response.ok) {
          setPDFData(await response.blob())// Get the PDF content as a blob
        } else {
          throw new Error('Request failed.');
        }
      })
   
  }, []);

 
  };

  return (
    <div>
      <h2>PDF Downloader</h2>
      {pdfData && (
        <div>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      )}
    </div>
  );



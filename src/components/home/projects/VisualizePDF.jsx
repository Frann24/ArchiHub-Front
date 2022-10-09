import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const VisualizePDF = ({ url }) => {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPage(numPages);
    setPageNumber(1);
  }
  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }
  function changePageBack() {
    changePage(-1);
  }
  function changePageNext() {
    changePage(+1);
  }
  return (
    <div className="flex justify-center">
      {/* <iframe src={url} frameborder="0"></iframe> */}
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={300} pageNumber={pageNumber}></Page>
        <div className="flex flex-col items-center">
          <p className="text-light">
            Page {pageNumber} of {numPage}
          </p>
          <div className="flex flex-row">
            <button
              disabled={pageNumber === 1}
              onClick={changePageBack}
              className="cursor-pointer my-2 border text-black w-full p-2 bg-gray-100 sm:hover:bg-gray-800 sm:hover:text-white transition-all duration-500"
            >
              Prev
            </button>
            <button
              disabled={pageNumber === numPage}
              onClick={changePageNext}
              className="cursor-pointer my-2 border text-black w-full p-2 bg-gray-100 sm:hover:bg-gray-800 sm:hover:text-white transition-all duration-500"
            >
              Next
            </button>
          </div>
        </div>
      </Document>
    </div>
  );
};

export default VisualizePDF;

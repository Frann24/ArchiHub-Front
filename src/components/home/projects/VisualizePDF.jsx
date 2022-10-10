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
    <div className="flex flex-col items-center">
      {/* <iframe src={url} frameborder="0"></iframe> */}
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={300} pageNumber={pageNumber}></Page>
        <div>
          <p className="text-light">
            Page {pageNumber} of {numPage}
          </p>
          <div>
            <button
              disabled={pageNumber === 1}
              onClick={changePageBack}
              className="absolute left-0 float-left cursor-pointer my-2 border text-black w-full p-2 bg-gray-100"
            >
              {`<`}
            </button>
            <button
              disabled={pageNumber === numPage}
              onClick={changePageNext}
              className=" absolute right-0 float-right cursor-pointer my-2 border text-black w-full p-2 bg-gray-100"
            >
              {`>`}
            </button>
          </div>
        </div>
      </Document>
    </div>
  );
};

export default VisualizePDF;

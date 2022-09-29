import React from "react";
import news from "../../../api/news";

export default function Paginado({
  newsPerPage,
  newsFilter,
  paginado,
  currentPage,
  handlePrev,
  handleNext
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(newsFilter / newsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="botonera">
      {currentPage === 1 ? (
        <div></div>
      ) : (
        <span className="flechas" onClick={() => handlePrev()}>
          {"<"}
        </span>
      )}

      {pageNumbers && currentPage === pageNumbers.length ? (
        <div></div>
      ) : (
        <span className="arrows" onClick={() => handleNext()}>
          {">"}
        </span>
      )}
    </div>
  );
}

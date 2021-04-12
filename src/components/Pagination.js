import React from "react";

function Pagbuttons({
  currentPageNumber,
  chandgeCurrentPageHandler,
  pageNumbers,
  prevPageHandler,
  nextPageHandler,
}) {
  return (
    <nav>
      <div className="prev" onClick={() => prevPageHandler()}>
        «
      </div>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPageNumber ? "active" : " disabled"}
            onClick={() => chandgeCurrentPageHandler(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
      <div className="next" onClick={() => nextPageHandler()}>
        »
      </div>
    </nav>
  );
}

export default Pagbuttons;

import React from "react";

function Pagbuttons({
  currentPage,
  chandgeCurrentPageHandler,
  pages,
  prevPageHandler,
  nextPageHandler,
}) {
  return (
    <nav>
      <div className="prev" onClick={() => prevPageHandler()}>
        «
      </div>
      <ul className="pagination">
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : " disabled"}
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

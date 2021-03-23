import React from "react";

function Pagbuttons({
  currentPage,
  chandgeCurrentPageHandler,
  pages,
  prevPage,
  nextPage,
}) {
  return (
    <nav>
      <div className="prev" onClick={() => prevPage()}>
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
      <div className="next" onClick={() => nextPage()}>
        »
      </div>
    </nav>
  );
}

export default Pagbuttons;

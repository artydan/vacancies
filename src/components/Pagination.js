import React from "react";
import "../global.css";

function Pagination({
    currentPageNumber,
    chandgeCurrentPageHandler,
    pageNumbers,
    prevPageHandler,
    nextPageHandler,
}) {
    return (
        <div className="pagination_Wrapper">
            <div className="prev" onClick={() => prevPageHandler()}>
                «
            </div>
            <div className="pagination_Btns_Wrapper">
                {pageNumbers.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={
                            pageNumber === currentPageNumber
                                ? "active"
                                : " disabled"
                        }
                        onClick={() => chandgeCurrentPageHandler(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                ))}
            </div>
            <div className="next" onClick={() => nextPageHandler()}>
                »
            </div>
        </div>
    );
}

export default Pagination;

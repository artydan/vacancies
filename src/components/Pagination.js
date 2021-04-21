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
                    <div
                        key={pageNumber}
                        className={
                            pageNumber === currentPageNumber
                                ? "pagination_btns_active"
                                : "pagination_btns_disabled"
                        }
                        onClick={() => chandgeCurrentPageHandler(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
            <div className="next" onClick={() => nextPageHandler()}>
                »
            </div>
        </div>
    );
}

export default Pagination;

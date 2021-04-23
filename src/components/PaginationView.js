import React, { useState, useEffect } from "react";
import PaginationButtons from "./PaginationButtons";

function PaginationView({ itemsOnPageChanged, items }) {
    const perPage = 10;
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        let indexOfLast = currentPageNumber * perPage;
        let indexOfFirst = indexOfLast - perPage;
        let itemsOnPage = items.slice(indexOfFirst, indexOfLast);
        itemsOnPageChanged(itemsOnPage);
    }, [currentPageNumber, items, itemsOnPageChanged]);

    useEffect(() => {
        let pagesCount = items.length / perPage;
        let pageNumbers = [];
        for (let i = 1; i <= pagesCount; i++) {
            pageNumbers.push(i);
        }
        setPageNumbers(pageNumbers);
    }, [items]);

    const nextPageHandler = () => {
        if (currentPageNumber < pageNumbers.length) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    };

    const prevPageHandler = () => {
        if (currentPageNumber !== 1) {
            setCurrentPageNumber(currentPageNumber - 1);
        }
    };

    const chandgeCurrentPageHandler = (pageCount) => {
        setCurrentPageNumber(pageCount);
    };

    return (
        <>
            <PaginationButtons
                pageNumbers={pageNumbers}
                chandgeCurrentPageHandler={chandgeCurrentPageHandler}
                currentPageNumber={currentPageNumber}
                prevPageHandler={prevPageHandler}
                nextPageHandler={nextPageHandler}
            />
        </>
    );
}

export default PaginationView;

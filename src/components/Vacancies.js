import React, { useState, useEffect } from "react";
import ModalView from "./ModalView.js";
import VacCard from "./VacCard";
import Pagination from "./Pagination";
import DetailedVacancy from "./DetailedVacancy.js";

function Vacancies(props) {
  let [vacns, setVacn] = useState([]);
  let [searchVac, setSearchVac] = useState("");
  let [selectedVac, setSelectedVac] = useState();
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [perPage, setperpage] = useState(10);
  let [currentPageNumber, setCurrentPageNumber] = useState(1);
  let indexOFLast = currentPageNumber * perPage;
  let indexOgFirst = indexOFLast - perPage;
  vacns = vacns.filter((val) =>
    val.name.toLowerCase().startsWith(searchVac.toLowerCase())
  );
  let vacOnPage = vacns.slice(indexOgFirst, indexOFLast);
  let pagesCount = vacns.length / perPage;
  let pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  let chandgeCurrentPageHandler = (pageCount) => {
    setCurrentPageNumber(pageCount);
  };

  let nextPageHandler = () => {
    if (currentPageNumber < pageNumbers.length) {
      setCurrentPageNumber(++currentPageNumber);
    }
  };

  let prevPageHandler = () => {
    if (currentPageNumber !== 1) {
      setCurrentPageNumber(--currentPageNumber);
    }
  };

  useEffect(() => {
    fetch("https://api.hh.ru/vacancies?per_page=100")
      .then((res) => res.json())
      .then((data) => setVacn(data.items));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVacancyHandler = (vacancy) => {
    setSelectedVac(vacancy);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalOpen === true ? "hidden" : "auto";
  }, [isModalOpen]);
  return (
    <div className="wrapper">
      <div className="search_Inputinput_Wrapper">
        <input
          type="text"
          className="search_Input"
          placeholder="Поиск по вакансиям"
          onChange={(event) => setSearchVac(event.target.value)}
        />
      </div>
      {vacOnPage.map((vacn) => (
        <VacCard
          key={vacn.id}
          vacancy={vacn}
          openVacancyHandler={openVacancyHandler}
        />
      ))}
      <ModalView isModalOpen={isModalOpen} closeModal={closeModal}>
        <DetailedVacancy vacancy={selectedVac} />
      </ModalView>
      <Pagination
        pageNumbers={pageNumbers}
        chandgeCurrentPageHandler={chandgeCurrentPageHandler}
        className="pagBtn"
        currentPageNumber={currentPageNumber}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
}

export default Vacancies;

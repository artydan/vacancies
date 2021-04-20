import React, { useState, useEffect } from "react";
import ModalView from "./ModalView.js";
import VacancyCard from "./VacancyCard";
import Pagination from "./Pagination";
import DetailedVacancy from "./DetailedVacancy.js";
import VacancySalary from "./VacancySalary.js";

function Vacancies(props) {
  let [allVacancies, setAllVacancies] = useState([]);
  let [searchVacancies, setSearchVacancies] = useState("");
  let [selectedVac, setSelectedVac] = useState();
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [perPage, setperpage] = useState(10);
  let [currentPageNumber, setCurrentPageNumber] = useState(1);
  let indexOFLast = currentPageNumber * perPage;
  let indexOgFirst = indexOFLast - perPage;
  allVacancies = allVacancies.filter((val) =>
    val.name.toLowerCase().startsWith(searchVacancies.toLowerCase())
  );
  let VacanciesOnPage = allVacancies.slice(indexOgFirst, indexOFLast);
  let pagesCount = allVacancies.length / perPage;
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
      .then((data) => setAllVacancies(data.items));
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
      <div className="search_Input_Wrapper">
        <input
          type="text"
          className="search_Input"
          placeholder="Поиск по вакансиям"
          onChange={(event) => setSearchVacancies(event.target.value)}
        />
      </div>
      {VacanciesOnPage.map((vacancy) => (
        <VacancyCard
          key={vacancy.id}
          vacancy={vacancy}
          openVacancyHandler={openVacancyHandler}
        >
          <VacancySalary vacancy={vacancy} />
        </VacancyCard>
      ))}
      <ModalView isModalOpen={isModalOpen} closeModal={closeModal}>
        <DetailedVacancy vacancy={selectedVac}></DetailedVacancy>
      </ModalView>
      <Pagination
        pageNumbers={pageNumbers}
        chandgeCurrentPageHandler={chandgeCurrentPageHandler}
        currentPageNumber={currentPageNumber}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </div>
  );
}

export default Vacancies;

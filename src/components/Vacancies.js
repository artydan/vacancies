import React, { useState, useEffect } from "react";
import ModalVac from "./ModalVac";
import VacCard from "./VacCard";
import Pagbuttons from "./Pagbuttons";

function Vacancies(props) {
  let [vacns, setVacn] = useState([]);
  let [searchVac, setSearchVac] = useState("");
  let [selectedVac, setSelectedVac] = useState();
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [perPage, setperpage] = useState(10);
  let [currentPage, setCurrentPage] = useState(1);
  let indexOFLast = currentPage * perPage;
  let indexOgFirst = indexOFLast - perPage;
  vacns = vacns.filter((val) =>
    val.name.toLowerCase().startsWith(searchVac.toLowerCase())
  );
  let vacOnPage = vacns.slice(indexOgFirst, indexOFLast);

  let pagesCount = vacns.length / perPage;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let chandgeCurrentPageHandler = (pageCount) => {
    setCurrentPage(pageCount);
  };

  let nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(++currentPage);
    }
  };

  let prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(--currentPage);
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
  const openVacancieHandler = (vacancie) => {
    //открытsь модальное окно и обновить стэйт текущей вакансии бтек вак пропс модалвап
    setSelectedVac(vacancie);

    setIsModalOpen(true);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalOpen === true ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="wrapper">
      <div className="inputwrapper">
        <input
          type="text"
          className="searchInput"
          placeholder="Поиск по вакансиям"
          onChange={(event) => setSearchVac(event.target.value)}
        />
      </div>
      {vacOnPage.map((vacn) => (
        <VacCard
          vacancies={vacns}
          key={vacn.id}
          vacancie={vacn}
          openVacancieHandler={openVacancieHandler}
        ></VacCard>
      ))}
      <ModalVac
        vacancies={vacns}
        vacancie={selectedVac}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      <Pagbuttons
        pages={pages}
        chandgeCurrentPageHandler={chandgeCurrentPageHandler}
        className="pagBtn"
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      ></Pagbuttons>
    </div>
  );
}

export default Vacancies;
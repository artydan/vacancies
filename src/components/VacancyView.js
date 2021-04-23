import React, { useState } from "react";
import VacancyCard from "./VacancyCard";
import VacancyModal from "./VacancyModal";
import nothingFind from "../images/nothing.png";

function VacancyView({ vacancies, data, searchValue }) {
    const [selectedVacancy, setSelectedVacancy] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openVacancyHandler = (vacancy) => {
        setIsModalOpen(true);
        setSelectedVacancy(vacancy);
    };

    if (data.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    if (vacancies.length === 0 && searchValue !== "") {
        return (
            <div className="nothing_find_wrapper">
                <img
                    claaname="nothing_find"
                    src={nothingFind}
                    alt="Ничего не найдено "
                ></img>
                <div className="noting_find_text">Ничего не найдено</div>
            </div>
        );
    }

    return (
        <>
            {vacancies.map((vacancy) => (
                <VacancyCard
                    key={vacancy.id}
                    vacancy={vacancy}
                    openVacancyHandler={openVacancyHandler}
                ></VacancyCard>
            ))}
            <VacancyModal
                selectedVacancy={selectedVacancy}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
}

export default VacancyView;

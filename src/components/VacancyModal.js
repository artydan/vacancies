import React, { useEffect } from "react";
import ModalView from "./ModalView";
import DetailedVacancy from "./DetailedVacancy";
import "../global.css";

function VacancyModal({ selectedVacancy, isModalOpen, closeModal }) {
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = isModalOpen === true ? "hidden" : "auto";
    }, [isModalOpen]);

    return (
        <div className="wrapper">
            <ModalView isModalOpen={isModalOpen} closeModal={closeModal}>
                <DetailedVacancy vacancy={selectedVacancy}></DetailedVacancy>
            </ModalView>
        </div>
    );
}

export default VacancyModal;

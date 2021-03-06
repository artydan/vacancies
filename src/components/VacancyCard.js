import React from "react";
import "../global.css";
import VacancySalary from "./VacancySalary";

function VacancyCard({ vacancy, openVacancyHandler }) {
    return (
        <div>
            <div className="vacancy_Card">
                <div className="vacancy_Card_Name">{vacancy.name}</div>
                {vacancy.snippet?.responsibility && (
                    <div className="vacancy_Card_Responsibility">
                        {vacancy.snippet?.responsibility}
                    </div>
                )}
                {vacancy.employer.logo_urls?.original && (
                    <div className="vacancy_Card_Logo_Wrapper">
                        <img
                            className="vacancy_Card_Logo"
                            src={vacancy.employer.logo_urls?.original}
                            alt="company_Logo"
                        />
                    </div>
                )}
                <div className="vacancy_Card_Salary">
                    <VacancySalary salary={vacancy.salary} />
                </div>
                <div className="vacancy_Card_City">
                    {" "}
                    {vacancy.address?.city}
                </div>
                <div className="btn_wrapper">
                    <button
                        className="vacancy_Card_Btn"
                        onClick={() => openVacancyHandler(vacancy)}
                    >
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VacancyCard;

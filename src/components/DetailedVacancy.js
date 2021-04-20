import React from "react";
import VacancySalary from "./VacancySalary";
import { useState, useEffect } from "react";
import "../global.css";

function DetailedVacancy({ vacancy }) {
    const [detailedVacancyInfo, setdetailedVacancyInfo] = useState();
    useEffect(() => {
        fetch(`https://api.hh.ru/vacancies/${vacancy?.id}`)
            .then((res) => res.json())
            .then((result) => setdetailedVacancyInfo(result));
    }, [vacancy]);
    return (
        <div className="vacancy_info">
            <div className="vacancy_Name_And_Logo">
                {detailedVacancyInfo?.employer && (
                    <div className="vacancy_Name ">
                        Работадатель : "{detailedVacancyInfo.employer?.name}"
                    </div>
                )}
                {detailedVacancyInfo?.employer.logo_urls?.original && (
                    <img
                        className="vacancy_Logo"
                        src={detailedVacancyInfo.employer.logo_urls?.original}
                        alt="company_Logo"
                    />
                )}
            </div>
            <div className=" vacancy_Salary">
                {" "}
                Зарплата : <VacancySalary vacancy={vacancy} />
            </div>
            <div className="vacancy_Busyness">
                Занятость : {detailedVacancyInfo?.schedule?.name}
            </div>
            {detailedVacancyInfo?.address && (
                <div className=" vacancy_Address">
                    Адрес : {detailedVacancyInfo.address?.city} ,{" "}
                    {detailedVacancyInfo.address?.street} ,
                    {detailedVacancyInfo.address?.building}
                </div>
            )}
            {vacancy?.snippet?.requirement && (
                <div className="vacancy_Requirement">
                    Требования : {vacancy.snippet?.requirement}
                </div>
            )}
            {vacancy?.snippet?.responsibility && (
                <div className=" vacancy_Responsobility">
                    Обязанности : {vacancy?.snippet?.responsibility}
                </div>
            )}
            {detailedVacancyInfo?.experience?.name && (
                <div className="vacancy_Experience">
                    Опыт работы : {detailedVacancyInfo.experience?.name}
                </div>
            )}
        </div>
    );
}

export default DetailedVacancy;

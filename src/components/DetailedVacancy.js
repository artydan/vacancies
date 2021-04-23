import React from "react";
import VacancySalary from "./VacancySalary";
import { useState, useEffect } from "react";
import JsxParser from "react-jsx-parser";
import "../global.css";
import { getDetailedVacancieInfo } from "../services/hhService";

function DetailedVacancy({ vacancy }) {
    const [detailedVacancyInfo, setdetailedVacancyInfo] = useState();
    useEffect(() => {
        getDetailedVacancieInfo(vacancy.id).then((vacancyInfo) =>
            setdetailedVacancyInfo(vacancyInfo)
        );
    }, [vacancy]);

    return (
        <div className="vacancy_info">
            <div className="vacancy_EmployerName_And_Logo">
                {detailedVacancyInfo?.employer && (
                    <div className="vacancy_Employer_Name ">
                        <span className="detiledVacancyInfo_title">
                            Работадатель:
                        </span>
                        <span className="info_In_Modal">
                            {detailedVacancyInfo.employer?.name}
                        </span>
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
            <div className="vacancy_Name_in_modal">
                <span className="detiledVacancyInfo_title">Требуется:</span>
                <span className="info_In_Modal">
                    {detailedVacancyInfo?.name}
                </span>
            </div>
            {detailedVacancyInfo?.address && (
                <div className=" vacancy_Address">
                    <span className="detiledVacancyInfo_title">Адрес:</span>
                    <span className="info_In_Modal">{`${detailedVacancyInfo.address?.city} , ${detailedVacancyInfo.address?.street},${detailedVacancyInfo.address?.building}`}</span>
                </div>
            )}
            <div className=" vacancy_Salary">
                <span className="detiledVacancyInfo_title">Зарплата:</span>
                <span className="info_In_Modal">
                    <VacancySalary salary={vacancy.salary} />
                </span>
            </div>
            {detailedVacancyInfo?.experience?.name && (
                <div className="vacancy_Experience">
                    <span className="detiledVacancyInfo_title">
                        Опыт работы:
                    </span>
                    <span className="info_In_Modal">
                        {detailedVacancyInfo.experience?.name}
                    </span>
                </div>
            )}
            <div className="vacancy_Busyness">
                <span className="detiledVacancyInfo_title">Занятость:</span>
                <span className="info_In_Modal">
                    {detailedVacancyInfo?.schedule?.name}
                </span>
            </div>
            <JsxParser jsx={detailedVacancyInfo?.description} />
        </div>
    );
}

export default DetailedVacancy;

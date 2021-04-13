import React from "react";
import { useState, useEffect } from "react";
import "../global.css";

function DetailedVacancie({ vacancie }) {
  const [detailedVacancieInfo, setdetailedVacancieInfo] = useState();
  useEffect(() => {
    fetch(`https://api.hh.ru/vacancies/${vacancie?.id}`)
      .then((res) => res.json())
      .then((result) => setdetailedVacancieInfo(result));
  }, [vacancie]);
  return (
    <div className="info">
      <div className="name_and_logo">
        {detailedVacancieInfo?.employer && (
          <div className="vacInfo ">
            Работадатель : "{detailedVacancieInfo.employer?.name}"
          </div>
        )}
        {detailedVacancieInfo?.employer.logo_urls?.original && (
          <div className="logomodal">
            <img
              className="iamLogomodal"
              src={detailedVacancieInfo.employer.logo_urls?.original}
              alt="logo"
            />
          </div>
        )}
      </div>
      {(detailedVacancieInfo?.salary?.from &&
        detailedVacancieInfo?.salary?.to && (
          <div className="vacInfo modalSalary">
            Зарплата:{" "}
            {detailedVacancieInfo.salary?.from.toLocaleString("ru-RU")} -{" "}
            {detailedVacancieInfo.salary?.to.toLocaleString("ru-RU")}{" "}
            {detailedVacancieInfo.salary?.currency === "RUR"
              ? "руб."
              : detailedVacancieInfo.salary?.currency}
          </div>
        )) ||
        (detailedVacancieInfo?.salary?.from && (
          <div className="vacInfo modalSalary">
            Зарплата:{" "}
            {detailedVacancieInfo.salary?.from.toLocaleString("ru-RU")}{" "}
            {detailedVacancieInfo.salary?.currency === "RUR"
              ? "руб."
              : detailedVacancieInfo.salary?.currency}
          </div>
        )) ||
        (detailedVacancieInfo?.salary?.to && (
          <div className="vacInfo modalSalary">
            Зарплата : {detailedVacancieInfo.salary?.to.toLocaleString("ru-RU")}{" "}
            {detailedVacancieInfo.salary?.currency === "RUR"
              ? "руб."
              : detailedVacancieInfo.salary?.currency}
          </div>
        ))}
      <div className="vacInfo schedule">
        Занятость : {detailedVacancieInfo?.schedule?.name}
      </div>
      {detailedVacancieInfo?.address && (
        <div className="vacInfo address">
          Адрес : {detailedVacancieInfo.address?.city} ,{" "}
          {detailedVacancieInfo.address?.street} ,
          {detailedVacancieInfo.address?.building}
        </div>
      )}
      {vacancie?.snippet?.requirement && (
        <div className="vacInfo requirement">
          Требования : {vacancie.snippet?.requirement}
        </div>
      )}
      {vacancie?.snippet?.responsibility && (
        <div className="vacInfo responsobility">
          Обязанности : {vacancie?.snippet?.responsibility}
        </div>
      )}
      {detailedVacancieInfo?.experience?.name && (
        <div className="vacInfo responsobility">
          Опыт работы : {detailedVacancieInfo.experience?.name}
        </div>
      )}
    </div>
  );
}

export default DetailedVacancie;

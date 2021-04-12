import React from "react";
import "../global.css";

function Vaccard({ vacancie, openVacancieHandler }) {
  return (
    <div>
      <div className="vacCard">
        <div className="vacName">{vacancie.name}</div>
        {vacancie.snippet?.responsibility && (
          <div className="vacResp">{vacancie.snippet?.responsibility}</div>
        )}
        {vacancie.employer.logo_urls?.original && (
          <div className="logo">
            <img
              className="imLogo"
              src={vacancie.employer.logo_urls?.original}
              alt="logo"
            />
          </div>
        )}
        {(vacancie.salary?.from && vacancie.salary?.to && (
          <div className="vacSalary">
            {vacancie.salary?.from.toLocaleString("ru-RU")} -{" "}
            {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
            {vacancie.salary?.currency === "RUR"
              ? "RUB"
              : vacancie.salary?.currency}
          </div>
        )) ||
          (vacancie.salary?.from && (
            <div className="vacSalary">
              {vacancie.salary?.from.toLocaleString("ru-RU")}{" "}
              {vacancie.salary?.currency === "RUR"
                ? "RUB"
                : vacancie.salary?.currency}
            </div>
          )) ||
          (vacancie.salary?.to && (
            <div className="vacSalary">
              {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
              {vacancie.salary?.currency === "RUR"
                ? "RUB"
                : vacancie.salary?.currency}
            </div>
          ))}

        <div className="vacCity"> {vacancie.address?.city}</div>
        <div className="btn_wrapper">
          <button
            className="btn_vacCard"
            onClick={() => openVacancieHandler(vacancie)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vaccard;

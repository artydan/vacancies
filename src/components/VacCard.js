import React from "react";
import "../global.css";

function Vaccard({ vacancie, openVacancieHandler,  }) {
  let logoUrl = vacancie.employer.logo_urls?.original; 

  return (
    <div>
      <div className="vacCard">
        <div className="vacName">{vacancie.name}</div>
        {vacancie.employer.logo_urls?.original && (
          <div className="logo">
            <img className="imLogo" src={logoUrl} alt="logo" />
          </div>
        )}
        {(vacancie.salary?.from && vacancie.salary?.to && (
          <div className="vacSalary">
            {vacancie.salary?.from.toLocaleString("ru-RU")} - {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
            {vacancie.salary?.currency === "RUR" ? "руб.": vacancie.salary?.currency}
          </div>
        )) 
          ||
          (vacancie.salary?.from && (
            <div className="vacSalary">
              {vacancie.salary?.from.toLocaleString("ru-RU")}{" "}
              {vacancie.salary?.currency === "RUR" ? "руб.": vacancie.salary?.currency}
            </div>
          )) ||
          (vacancie.salary?.to && (
            <div className="vacSalary">
              {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
              {vacancie.salary?.currency === "RUR" ? "руб.": vacancie.salary?.currency}
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

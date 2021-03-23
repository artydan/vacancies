import React from "react";
import "../global.css";

function Vaccard({ vacancie, openVacancieHandler }) {
  let logoUrl = vacancie.employer.logo_urls?.original;

  return (
    <div >
      <div className="vacCard">
        <div className="vacName">{vacancie.name}</div>
        <div className="logo">
          <img className="imLogo" src={logoUrl} alt="logo" />
        </div>
        <div className="vacSalary">{vacancie.salary?.from}</div>
        <div className="vacCity"> {vacancie.address?.city}</div>
        <div className="btn_wrapper">
          <button
            className="btn_vacCard"
            onClick={() => openVacancieHandler(vacancie)}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vaccard;

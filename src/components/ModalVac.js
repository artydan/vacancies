import React from "react";
import "../global.css";

function ModalVac({ vacancie, isModalOpen, closeModal }) {
  if (isModalOpen) {
    return (
      <div className="modal" onClick={() => closeModal()}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="closePngwrapper">
            <div className="closepng" onClick={() => closeModal()}></div>
          </div>

          <div className="modalTitle">Подробная информация</div>
          <div className="info">
            {vacancie.employer && (
              <div className="vacInfo ">
                Работадатель : "{vacancie.employer?.name}"
              </div>
            )}

            {(vacancie.salary?.from && vacancie.salary?.to && (
              <div className="vacInfo modalSalary">
                Зарплата: {vacancie.salary?.from.toLocaleString("ru-RU")} -{" "}
                {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
                {vacancie.salary?.currency === "RUR"
                  ? "руб."
                  : vacancie.salary?.currency}
              </div>
            )) ||
              (vacancie.salary?.from && (
                <div className="vacInfo modalSalary">
                  Зарплата: {vacancie.salary?.from.toLocaleString("ru-RU")}{" "}
                  {vacancie.salary?.currency === "RUR"
                    ? "руб."
                    : vacancie.salary?.currency}
                </div>
              )) ||
              (vacancie.salary?.to && (
                <div className="vacInfo modalSalary">
                  Зарплата : {vacancie.salary?.to.toLocaleString("ru-RU")}{" "}
                   {vacancie.salary?.currency === "RUR"
                    ? "руб."
                    : vacancie.salary?.currency}
                </div>
              ))}

            <div className="vacInfo schedule">
              Занятость : {vacancie.schedule?.name}
            </div>
            {vacancie.address && (
              <div className="vacInfo address">
                Адрес : {vacancie.address?.city} , {vacancie.address?.street} ,
                {vacancie.address?.building}
              </div>
            )}

            {vacancie.snippet?.requirement && (
              <div className="vacInfo requirement">
                Требования : {vacancie.snippet?.requirement}
              </div>
            )}
            {vacancie.snippet?.responsibility && (
              <div className="vacInfo responsobility">
                Обязанности : {vacancie.snippet?.responsibility}
              </div>
            )}

            {vacancie.employer.logo_urls?.original && (
              <div className="logomodal">
                <img
                  className="iamLogomodal"
                  src={vacancie.employer.logo_urls?.original}
                  alt="logo"
                />
              </div>
            )}
            <div className="submit">
              <div className="subm"> Откликнуться </div>
              <input className="phoneNum" type="text" placeholder="Номер телефона"></input>
              <input className="email" type="email" placeholder="Email"></input>
              <input className="submitBtn" type="submit" value="Отправить"></input>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalVac;

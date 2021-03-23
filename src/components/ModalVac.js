import React from "react";
import "../global.css";
import close from "./close.svg";

function ModalVac({ vacancie, isModalOpen, closeModal }) {
  if (isModalOpen) {
    return (
      <div className="modal">
        <div className="modalContent">
          <img
            className="closepng"
            onClick={() => closeModal()}
            src={close}
            alt="close"
          />
          <div className="modalTitle">Подробная информация</div>
          <div className="info">
            {vacancie.employer && (
              <div className="vacOrganiz">
                Работадатель : "{vacancie.employer?.name}"
              </div>
            )}

            <div className="schedule">
              {" "}
              Занятость : {vacancie.schedule?.name}
            </div>
            {vacancie.address && (
              <div className="address">
                {" "}
                Адресс : {vacancie.address?.city} , {vacancie.address?.street} ,
                {vacancie.address?.building}
              </div>
            )}

            <div>
             
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

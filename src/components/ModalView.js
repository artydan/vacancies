import React from "react";
import "../global.css";

function ModalView({ isModalOpen, closeModal, children }) {
  if (!isModalOpen) {
    return null;
  } else {
    return (
      <div className="modal" onClick={() => closeModal()}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="closePngwrapper">
            <div className="closepng" onClick={() => closeModal()}></div>
          </div>
          <div className="modalTitle">Подробная информация</div>
          {children}
          <div className="submit">
            <div className="subm"> Откликнуться </div>
            <input
              className="phoneNum"
              type="tel"
              placeholder="Номер телефона"
            ></input>
            <input className="email" type="email" placeholder="Email"></input>
            <input
              className="submitBtn"
              type="submit"
              value="Отправить"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalView;

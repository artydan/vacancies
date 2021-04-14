import React from "react";
import "../global.css";

function ModalView({ isModalOpen, closeModal, children }) {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="closePngwrapper">
          <div className="closepng" onClick={() => closeModal()}></div>
        </div>
        <div className="modalTitle">Подробная информация</div>
        {children}
        <div className="submit_Form_Wrapper">
          <div className="submit_Form_Subheader"> Откликнуться </div>
          <input
            className="phoneNum_Form"
            type="tel"
            placeholder="Номер телефона"
          ></input>
          <input
            className="email_Form"
            type="email"
            placeholder="Email"
          ></input>
          <input className="submit_Btn" type="submit" value="Отправить"></input>
        </div>
      </div>
    </div>
  );
}

export default ModalView;

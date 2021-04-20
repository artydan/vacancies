import React from "react";
import "../global.css";

function ModalView({ isModalOpen, closeModal, children,childrene }) {
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="modal_View" onClick={() => closeModal()}>
      <div className="modal_Content" onClick={(e) => e.stopPropagation()}>
        <div className="close_Wodal_Btn_Wrapper">
          <div className="close_modal_btn" onClick={() => closeModal()}></div>
        </div>
        <div className="modal_Title">Подробная информация</div>
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

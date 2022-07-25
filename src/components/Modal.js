import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_container">
        <button onClick={props.onCloseModal} className="modal_btn">
          <span class="icon-cancel-circle"></span>
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;

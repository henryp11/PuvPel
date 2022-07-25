import React from "react";
import Modal from "./Modal";
import "../styles/modal.css";

function ItemDelete(props) {
  return (
    <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
      <h1>Está seguro que deseas eliminar?</h1>
      <div className="item_actions item_actions--delete">
        <button
          onClick={props.onDeleteItem}
          className="item-interaction item-interaction--button item-interaction--button--delete"
        >
          <span class="icon-bin"></span>
        </button>
        <button
          onClick={props.onCloseModal}
          className="item-interaction item-interaction--button item-interaction--button--delete"
        >
          <span class="icon-cancel-circle"></span>
        </button>
      </div>
    </Modal>
  );
}

export default ItemDelete;

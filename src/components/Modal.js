import React from 'react';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div
      id={ id }
      className="modal"
      onClick={ handleOutsideClick }
    >
      <div className="container">
        <button
          type="button"
          className="close"
          onClick={ onClose }
        >
          fechar
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};


export default Modal;

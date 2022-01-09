import React from 'react'

const Modal = ({ showModal, handleClose, show, children }) => {

  return (
    <div className={`${show ? "block" : "hidden"} modal fixed z-[900] top-0 bottom-0 left-0 right-0 w-full h-full opacity-60 bg-black`}>
      <section className="modal-main fixed z-[1000] bg-white w-4/5 h-auto top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        {children}
        <button type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

export default Modal

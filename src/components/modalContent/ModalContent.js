import React from "react";

export default function ModalContent({ showModal, onClose, message, employeeName }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        {employeeName && (
          <p className="modal-employee-name">Employé ajouté : {employeeName}</p>
        )}
        <button className="modal-close" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}

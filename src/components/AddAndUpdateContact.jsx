import React from "react";
import Modal from "./Modal";
const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div className="flex justify-center">
      
      <Modal isOpen={isOpen} onClose={onClose} > 

      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;

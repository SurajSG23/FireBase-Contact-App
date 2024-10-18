import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const contactCards = ({ contact, onOpen, onClose,isOpen }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Succefully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex gap-2 justify-stretch border border-white rounded-md items-center text-black my-2 bg-yellow relative"
      >
        <div className="text-2xl ml-2">
          <FaUserAlt />
        </div>
        <div className="ml-2">
          <h2 className="text-xl font-medium">{contact.name}</h2>
          <p className="">{contact.email}</p>
        </div>
        <div className="flex gap-4 text-2xl absolute right-2">
          <FaTrash
            className="cursor-pointer text-red-500"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContact isUpdate={"true"} isOpen={isOpen} onClose={onclose} />
    </>
  );
};

export default contactCards;

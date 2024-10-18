import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
const Modal = ({ onClose, isOpen, children }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      toast.success("Contact Added Succefully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="z-50 min-h-[220px] min-w-[350px] bg-white absolute rounded-md top-[25vh] flex  border">
            <div>
              <AiOutlineClose
                className="m-[10px] absolute right-0 text-2xl cursor-pointer"
                onClick={onClose}
              />
            </div>
            <div className="top-10 absolute left-3">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                }}
                onSubmit={(value) => {
                  console.log(value);
                  addContact(value);
                  onClose();
                }}
              >
                <Form action="">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      className="border border-black rounded-md w-[320px]"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border border-black rounded-md w-[320px]"
                      required
                    />
                  </div>
                  <button className="border border-black relative top-4 p-1 rounded-sm bg-yellow flex m-auto font-medium">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="absolute top-0 z-40 h-screen w-screen backdrop-blur"></div>
        </>
      )}
    </>
  );
};

export default Modal;

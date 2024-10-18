import Navbar from "./components/Navbar.jsx";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./config/firebase.js";
import ContactCards from "./components/ContactCards.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contact, setContact] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contact");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex relative items-center">
          <CiSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="border bg-transparent border-white rounded-md h-10 flex-grow text-white pl-9"
            onChange={filterContact}
          />
          <FaCirclePlus
            className="text-5xl text-white pl-1 cursor-pointer"
            onClick={onOpen}
          />
        </div>
        <div>
          {contact.map((contact) => (
            <ContactCards
              key={contact.id}
              contact={contact}
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
            />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";




const App = () => {
 
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // Стан для управління контактами
  const [contacts, setContacts] = useState(initialContacts);

  // Стан для управління полем пошуку
  const [searchTerm, setSearchTerm] = useState("");

  // Стан для управління відфільтрованими контактами
  // const [filteredContacts, setFilteredContacts] = useState(initialContacts);

  // Ефект для оновлення списку контактів при зміні пошукового терміну
  useEffect(() => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setContacts(filteredContacts);
  }, [searchTerm, contacts]);

  // Ефект для збереження контактів у локальне сховище при зміні контактів
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Функція для додавання нового контакту

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Функція для видалення контакту

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </>
  );
};

export default App;
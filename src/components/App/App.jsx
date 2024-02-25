import { useState } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';

const LocalStorageKey = 'contactsKey';

export default function App() {
  const [contacts, setContacts] = useLocalStorage(LocalStorageKey, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const filterImputId = shortid.generate();

  const formOnSubmitContact = newContact => {
    const compareContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    compareContact
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => {
          return [newContact, ...prevState];
        });
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const visibledContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmitContact={formOnSubmitContact} />
      <h2>Contacts</h2>
      <Filter id={filterImputId} value={filter} changeFilter={changeFilter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={visibledContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}

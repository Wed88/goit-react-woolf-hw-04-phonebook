import { useState } from 'react';
import shortid from 'shortid';
import { Form, Label, Input, ButtonSubmit } from './ContactForm.styled';

export default function ContactForm({ onSubmitContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameImputId = shortid.generate();
  const numberImputId = shortid.generate();

  const hendleImputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    onSubmitContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Label htmlFor={nameImputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={hendleImputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberImputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={hendleImputChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
}

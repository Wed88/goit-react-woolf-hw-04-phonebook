import React, { Component } from 'react';
import shortid from 'shortid';
import { Form, Label, Input, ButtonSubmit } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameImputId = shortid.generate();
  numberImputId = shortid.generate();

  hendleImputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.props.onSubmitContact(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { hendleSubmit, nameImputId, hendleImputChange, numberImputId } =
      this;
    const { name, number } = this.state;

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
}

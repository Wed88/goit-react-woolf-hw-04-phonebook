import React from 'react';
import { Button, Text, Item } from './ContactItem.styled';

export default function ContactItem({ name, number, id, onDeleteContact }) {
  return (
    <Item>
      <Text>
        {name}:&nbsp; {number}
      </Text>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
}

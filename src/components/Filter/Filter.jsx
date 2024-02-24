import React from 'react';
import { FilterContainer, Label, Input } from './Filter.styled';

export default function Filter({ id, value, changeFilter }) {
  return (
    <FilterContainer>
      <Label htmlFor={id}>Find contacts by name</Label>
      <Input type="text" value={value} id={id} onChange={changeFilter} />
    </FilterContainer>
  );
}

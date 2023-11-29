import React from 'react';

type InputProps = {
  id: string,
  type: string,
  label: string,
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function Input({ id, label, type, value, handleChange }: InputProps) {
  return (
    <label htmlFor={ id }>
      {label}
      <input
        id={ id }
        type={ type }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

export default Input;

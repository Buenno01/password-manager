import React from 'react';

type InputProps = {
  id: string,
  type: string,
  label: string,
};

function Input({ id, label, type }: InputProps) {
  return (
    <div>
      <label htmlFor={ id }>{label}</label>
      <input id={ id } type={ type } />
    </div>
  );
}

export default Input;

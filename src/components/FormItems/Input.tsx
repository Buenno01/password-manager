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
    <label
      htmlFor={ id }
      className="text-white flex flex-col w-full mb-3"
    >
      {label}
      <input
        id={ id }
        type={ type }
        value={ value }
        onChange={ handleChange }
        className="bg-zinc-700 rounded-md h-8 p-2"
      />
    </label>
  );
}

export default Input;

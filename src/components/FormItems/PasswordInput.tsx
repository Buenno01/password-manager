import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

type InputProps = {
  id: string,
  label: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function PasswordInput({ id, label, handleChange }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <label
      htmlFor={ id }
      className="text-white flex flex-col w-full mb-3"
    >
      {label}
      <div className="flex">
        <input
          onChange={ handleChange }
          id={ id }
          type={ passwordVisible ? 'text' : 'password' }
          className="bg-zinc-700 rounded-l-md h-8 p-2 w-5/6"
        />
        <button
          data-testid="show-hide-form-password"
          className={ `bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-500
        rounded-r-md border-l border-l-zinc-500
        flex w-1/6 items-center justify-center text-xl 
        ${passwordVisible ? 'text-zinc-200' : 'text-zinc-300'}` }
          onClick={ () => { setPasswordVisible(!passwordVisible); } }
        >
          <FontAwesomeIcon icon={ passwordVisible ? faEye : faEyeSlash } />
        </button>
      </div>
    </label>
  );
}

export default PasswordInput;

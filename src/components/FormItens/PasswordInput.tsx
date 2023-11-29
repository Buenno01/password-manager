import React, { useState } from 'react';
import eyeClosedSvg from '../../images/eye-closed.svg';
import eyeOpenedSvg from '../../images/eye-open.svg';

type InputProps = {
  id: string,
  label: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function PasswordInput({ id, label, handleChange }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <label htmlFor={ id }>
      {label}
      <input
        onChange={ handleChange }
        id={ id }
        type={ passwordVisible ? 'text' : 'password' }
      />
      <button onClick={ () => { setPasswordVisible(!passwordVisible); } }>
        <img
          src={ passwordVisible ? eyeOpenedSvg : eyeClosedSvg }
          alt={
          passwordVisible
            ? 'The password is visible'
            : 'The password is not visible'
          }
        />
      </button>
    </label>
  );
}

export default PasswordInput;

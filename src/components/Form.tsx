import React from 'react';
import Input from './Input';
import Button, { ButtonProps } from './Button';

type FormProps = {
  toggleFormVisibility: () => void;
};

function Form({ toggleFormVisibility }: FormProps) {
  const inputs = [
    {
      id: 'serviceInput',
      type: 'text',
      label: 'Nome do serviço',
    },
    {
      id: 'loginInput',
      type: 'text',
      label: 'Login',
    },
    {
      id: 'passwordInput',
      type: 'password',
      label: 'Senha',
    },
    {
      id: 'urlInput',
      type: 'text',
      label: 'URL',
    },
  ];

  const buttons: ButtonProps[] = [
    {
      text: 'Cadastrar',
    },
    {
      text: 'Cancelar',
      handleClick: toggleFormVisibility,
    },
  ];

  return (
    <form
      action="#"
      onSubmit={ (e) => { e.preventDefault(); } }
    >
      {
        inputs.map((input, index) => (<Input key={ index } { ...input } />))
      }
      <div>
        {buttons.map((button, index) => (
          <Button
            key={ index }
            { ...button }
          />
        ))}
      </div>
    </form>
  );
}

export default Form;

import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
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

  const buttons = [
    {
      text: 'Cadastrar',
    },
    {
      text: 'Cancelar',
    },
  ];

  return (
    <form action="#">
      {
        inputs.map((input, index) => (<Input key={ index } { ...input } />))
      }
      <div>
        {buttons.map((button, index) => (
          <Button
            key={ index }
            text={ button.text }
          />
        ))}
      </div>
    </form>
  );
}

export default Form;

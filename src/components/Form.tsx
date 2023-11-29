import React, { SetStateAction } from 'react';
import Input from './Input';
import Button, { ButtonProps } from './Button';
import PasswordInput from './PasswordInput';

type FormProps = {
  toggleFormVisibility: () => void;
  setFormValues: React.Dispatch<SetStateAction<FormValues>>,
  formValues: FormValues,
};

export type FormValues = {
  serviceValue: string,
  loginValue: string,
  passwordValue: string,
  urlValue: string,
};

function Form({ toggleFormVisibility, formValues, setFormValues }: FormProps) {
  const { serviceValue, loginValue, passwordValue, urlValue } = formValues;

  const validatePassword = {
    minChar: (passwordValue.length >= 8),
    maxChar: (passwordValue.length <= 16),
    haveNumAndLetter: (/[a-zA-Z]+/.test(passwordValue) && /[0-9]+/.test(passwordValue)),
    haveEspecialChar: (/[^A-Za-z0-9\s]+/.test(passwordValue)),
  };

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [`${target.id}Value`]: target.value });
  }
  function setValidationsClass(string: 'minChar' | 'maxChar'
  | 'haveNumAndLetter' | 'haveEspecialChar') {
    return validatePassword[string]
      ? 'valid-password-check '
      : 'invalid-password-check';
  }

  const inputs = [
    {
      id: 'service',
      type: 'text',
      label: 'Nome do serviço',
      value: serviceValue,
      handleChange,
    },
    {
      id: 'login',
      type: 'text',
      label: 'Login',
      value: loginValue,
      handleChange,
    },
    {
      id: 'password',
      type: 'password',
      label: 'Senha',
      value: passwordValue,
      handleChange: handlePasswordChange,
    },
    {
      id: 'url',
      type: 'text',
      label: 'URL',
      value: urlValue,
      handleChange,
    },
  ];

  const buttons: ButtonProps[] = [
    {
      text: 'Cadastrar',
      disabled: !(
        validatePassword.haveEspecialChar
        && validatePassword.haveNumAndLetter
        && validatePassword.maxChar
        && validatePassword.minChar
        && (loginValue.length > 0)
        && (serviceValue.length > 0)
      ),
    },
    {
      text: 'Cancelar',
      handleClick: toggleFormVisibility,
    },
  ];

  return (
    <>
      <form
        action="#"
        onSubmit={ (e) => { e.preventDefault(); } }
      >
        {
        inputs.map((input, index) => (
          input.type === 'password'
            ? <PasswordInput key={ index } { ...input } />
            : <Input key={ index } { ...input } />
        ))
      }
        <div>
          {
        buttons.map((button, index) => (
          <Button
            key={ index }
            { ...button }
          />
        ))
        }
        </div>
      </form>
      <div>
        <p
          className={ setValidationsClass('minChar') }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ setValidationsClass('maxChar') }
        >
          Possuir até 16 caracteres

        </p>
        <p
          className={ setValidationsClass('haveNumAndLetter') }
        >
          Possuir letras e números

        </p>
        <p
          className={ setValidationsClass('haveEspecialChar') }
        >
          Possuir algum caractere especial

        </p>
      </div>
    </>
  );
}

export default Form;

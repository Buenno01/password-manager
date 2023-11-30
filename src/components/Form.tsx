import React, { SetStateAction } from 'react';
import { Input, PasswordInput, Validations } from './FormItems/FormItems';
import Button, { ButtonProps } from './Button';

type FormProps = {
  toggleFormVisibility: () => void;
  registerNewPassword: (e:FormValues) => void,
  setFormValues: React.Dispatch<SetStateAction<FormValues>>,
  formValues: FormValues,
};

export type FormValues = {
  serviceValue: string,
  loginValue: string,
  passwordValue: string,
  urlValue: string,
};

function Form({ registerNewPassword, toggleFormVisibility,
  formValues, setFormValues }: FormProps) {
  const { serviceValue, loginValue, passwordValue, urlValue } = formValues;

  const validatePassword = {
    minChar: (passwordValue.length >= 8),
    maxChar: (passwordValue.length <= 16),
    haveNumAndLetter: (/[a-zA-Z]+/.test(passwordValue) && /[0-9]+/.test(passwordValue)),
    haveEspecialChar: (/[^A-Za-z0-9\s]+/.test(passwordValue)),
  };

  const initialForm: FormValues = {
    serviceValue: '',
    loginValue: '',
    passwordValue: '',
    urlValue: '',
  };

  function handleCancelButton() {
    toggleFormVisibility();
    setFormValues(initialForm);
  }

  function handleRegisterButton() {
    registerNewPassword(formValues);
    toggleFormVisibility();
    setFormValues(initialForm);
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [`${target.id}Value`]: target.value });
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
      handleChange,
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
      styles: 'success',
      disabled: !(
        validatePassword.haveEspecialChar
        && validatePassword.haveNumAndLetter
        && validatePassword.maxChar
        && validatePassword.minChar
        && (loginValue.length > 0)
        && (serviceValue.length > 0)
      ),
      handleClick: handleRegisterButton,
    },
    {
      text: 'Cancelar',
      styles: 'danger',
      handleClick: handleCancelButton,
    },
  ];

  return (
    <>
      <form
        action="#"
        onSubmit={ (e) => { e.preventDefault(); } }
        className="w-96 bg-zinc-600 rounded-xl p-6 flex flex-col
        items-center self-center"
      >
        {
        inputs.map((input, index) => (
          input.type === 'password'
            ? <PasswordInput key={ index } { ...input } />
            : <Input key={ index } { ...input } />
        ))
      }
        <div className="grid grid-cols-2 w-full gap-4">
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
      <Validations
        haveEspecialChar={ validatePassword.haveEspecialChar }
        haveNumAndLetter={ validatePassword.haveNumAndLetter }
        maxChar={ validatePassword.maxChar }
        minChar={ validatePassword.minChar }
      />
    </>
  );
}

export default Form;

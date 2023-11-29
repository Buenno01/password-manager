import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form, { FormValues } from './components/Form';
import PasswordList from './components/PasswordList';
import PasswordCard from './components/PasswordCard';

export type RegisteredPasswordType = {
  serviceValue: string,
  loginValue: string,
  passwordValue: string,
  urlValue: string,
  id: number,
};

function App() {
  const initialForm: FormValues = {
    serviceValue: '',
    loginValue: '',
    passwordValue: '',
    urlValue: '',
  };
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>(initialForm);
  const [passwords, setPasswords] = useState<RegisteredPasswordType[]>([]);

  const registerNewPassword = (newPassword: FormValues) => {
    const newId = passwords.length === 0
      ? 1
      : (passwords[passwords.length - 1].id + 1);
    setPasswords([...passwords, { ...newPassword, id: newId }]);
  };
  const toggleFormVisibility = () => {
    setFormIsVisible(!formIsVisible);
  };

  const handleDeletePassword = (removedId: number) => {
    const newList = passwords
      .filter(({ id: passwordId }) => passwordId !== removedId);
    setPasswords(newList);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        formIsVisible
        && <Form
          formValues={ formValues }
          setFormValues={ setFormValues }
          toggleFormVisibility={ toggleFormVisibility }
          registerNewPassword={ registerNewPassword }
        />
      }
      {
        !formIsVisible
        && (
          <>
            <Button
              handleClick={ toggleFormVisibility }
              text="Cadastrar nova senha"
            />
            <section>
              {
                passwords.length === 0
                  ? <p>nenhuma senha cadastrada</p>
                  : (
                    <PasswordList>
                      { passwords.map((password) => (
                        <PasswordCard
                          key={ password.id }
                          handleDeletePassword={ () => {
                            handleDeletePassword(password.id);
                          } }
                          { ...password }
                        />
                      ))}
                    </PasswordList>)
}
            </section>
          </>
        )
      }

    </div>
  );
}

export default App;

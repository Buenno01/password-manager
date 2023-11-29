import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form, { FormValues } from './components/Form';

function App() {
  const initialForm: FormValues = {
    serviceValue: '',
    loginValue: '',
    passwordValue: '',
    urlValue: '',
  };
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>(initialForm);
  const [registeredPasswords, setRegisteredPasswords] = useState<FormValues[]>([]);

  const registerNewPassword = (newPassword: FormValues) => {
    setRegisteredPasswords([...registeredPasswords, newPassword]);
  };
  const toggleFormVisibility = () => {
    setFormIsVisible(!formIsVisible);
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
                registeredPasswords.length === 0
                  ? <p>nenhuma senha cadastrada</p>
                  : registeredPasswords.map((password, index) => (
                    <div key={ index }>
                      <a target="_blank" href={ password.urlValue } rel="noreferrer">
                        {password.serviceValue}
                      </a>
                      <p>{password.loginValue}</p>
                      <p>{password.passwordValue}</p>
                    </div>
                  ))
              }
            </section>
          </>
        )
      }

    </div>
  );
}

export default App;

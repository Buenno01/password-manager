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
              Nenhuma senha cadastrada
            </section>
          </>
        )
      }

    </div>
  );
}

export default App;

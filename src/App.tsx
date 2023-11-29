import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
  const toggleFormVisibility = () => {
    setFormIsVisible(!formIsVisible);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        formIsVisible && <Form toggleFormVisibility={ toggleFormVisibility } />
      }
      {
        !formIsVisible
        && (<Button
          handleClick={ toggleFormVisibility }
          text="Cadastrar nova senha"
        />)
      }

    </div>
  );
}

export default App;

import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from './components/Button';
import Form, { FormValues } from './components/Form';
import PasswordList from './components/PasswordList';
import Title from './components/Title';
import { RegisteredPasswordType } from './@types/type';
import mockup from './mockUp';

function App() {
  const initialForm: FormValues = {
    serviceValue: '',
    loginValue: '',
    passwordValue: '',
    urlValue: '',
  };

  const [formValues, setFormValues] = useState<FormValues>(initialForm);
  const [formIsVisible, setFormIsVisible] = useState<boolean>(false);

  const [passwords, setPasswords] = useState<RegisteredPasswordType[]>(mockup);

  const registerNewPassword = (newPassword: FormValues) => {
    const newId = passwords.length === 0
      ? 1
      : (passwords[passwords.length - 1].id + 1);
    setPasswords([...passwords, { ...newPassword, id: newId }]);
    Swal.fire({
      background: '#27272a',
      color: 'white',
      confirmButtonColor: '#3b82f6',
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      timer: 1500,
    });
  };

  return (
    <div className="text-iconsolata bg-zinc-800 min-h-screen flex flex-col gap-10">
      <Title headline={ formIsVisible ? 'Adicionar nova senha' : 'Password Manager' } />
      {
        formIsVisible
        && <Form
          formValues={ formValues }
          setFormValues={ setFormValues }
          toggleFormVisibility={ () => { setFormIsVisible(!formIsVisible); } }
          registerNewPassword={ registerNewPassword }
        />
      }
      {
        !formIsVisible
        && (
          <>
            <div className="self-center w-48">
              <Button
                handleClick={ () => { setFormIsVisible(!formIsVisible); } }
                text="Cadastrar nova senha"
                styles="info"
              />
            </div>
            <PasswordList
              passwords={ passwords }
              setPasswords={ setPasswords }
            />
          </>
        )
      }

    </div>
  );
}

export default App;

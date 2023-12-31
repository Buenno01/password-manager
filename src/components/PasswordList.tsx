import React, { SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
import { RegisteredPasswordType } from '../@types/type';
import { PasswordCard, HidePasswordsInput } from './PasswordListItems/PasswordListItems';
import Button from './Button';
import mockup from '../mockUp';

type PasswordListProps = {
  passwords: RegisteredPasswordType[],
  setPasswords: React.Dispatch<SetStateAction<RegisteredPasswordType[]>>
};

export default function PasswordList({ passwords, setPasswords }:PasswordListProps) {
  const [hiddenPasswords, setHiddenPasswords] = useState<boolean>(true);
  const swalStyle = {
    background: '#27272a',
    color: 'white',
    confirmButtonColor: '#ef4444',
    denyButtonColor: '#3b82f6',
  };

  const handleDeletePassword = (removedId: number, service: string) => {
    const newList = passwords
      .filter(({ id: passwordId }) => passwordId !== removedId);

    Swal.fire({
      ...swalStyle,
      title: `Deletar informações de ${service}?`,
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Tenho certeza!',
      denyButtonText: 'Deixa pra lá!',
      focusDeny: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          ...swalStyle,
          confirmButtonColor: '#3b82f6',
          title: 'Deletado com sucesso!',
          icon: 'success',
        });
        setPasswords(newList);
      } else {
        Swal.fire({
          ...swalStyle,
          confirmButtonColor: '#3b82f6',
          title: 'Suas informações foram mantidas!',
          icon: 'info',
        });
      }
    });
  };

  return (

    <section
      className="flex flex-col container w-full md:w-fit self-center
    py-5 md:px-10 bg-zinc-600 rounded-xl gap-5 items-center"
    >

      {
        passwords.length === 0
          ? (
            <p className="self-center text-center text-white text-xl">
              Nenhuma senha cadastrada
            </p>
          ) : (
            <>
              <HidePasswordsInput
                hiddenPasswords={ hiddenPasswords }
                handleChange={ () => { setHiddenPasswords(!hiddenPasswords); } }
              />
              <div
                className="grid lg:grid-cols-3 xl:grid-cols-4
              grid-cols-1 md:grid-cols-2 gap-5"
              >
                {
                passwords.map((password) => (
                  <PasswordCard
                    key={ password.id }
                    { ...password }
                    handleDeletePassword={ () => {
                      handleDeletePassword(password.id, password.serviceValue);
                    } }
                    hiddenPasswords={ hiddenPasswords }
                  />))
                }
              </div>
            </>
          )
          }
      <span className="w-36">
        <Button
          text="Criar mockUp"
          handleClick={ () => { setPasswords([...passwords, ...mockup]); } }
          styles="info"
        />
      </span>
    </section>

  );
}

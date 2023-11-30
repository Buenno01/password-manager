import ValidationItem from './ValidationItem';

type ValidationsProps = {
  minChar: boolean,
  maxChar: boolean,
  haveNumAndLetter: boolean,
  haveEspecialChar: boolean,
};

function Validations({ haveEspecialChar, haveNumAndLetter,
  maxChar, minChar }: ValidationsProps) {
  const validationsList = [
    {
      description: 'Possuir 8 ou mais caracteres',
      status: minChar,
    },
    {
      description: 'Possuir até 16 caracteres',
      status: maxChar,
    },
    {
      description: 'Possuir algum caractere especial',
      status: haveNumAndLetter,
    },
    {
      description: 'Possuir letras e números',
      status: haveEspecialChar,
    },
  ];
  return (
    <div className="self-center">
      {
        validationsList.map((validation, i) => (
          <ValidationItem key={ i } { ...validation } />
        ))
      }
    </div>
  );
}

export default Validations;

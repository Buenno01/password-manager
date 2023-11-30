import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HidePasswordsInputProps = {
  hiddenPasswords: boolean,
  handleChange: () => void,
};

function HidePasswordsInput({ handleChange, hiddenPasswords } :HidePasswordsInputProps) {
  return (
    <label
      className="cursor-pointer text-white text-2xl
    bg-blue-500 hover:bg-blue-600 active:bg-blue-400 px-5 py-1
    font-medium flex items-center gap-2 self-center rounded-xl w-fit"
    >
      Esconder senhas
      <span className="text-lg w-5 flex justify-center">
        <FontAwesomeIcon icon={ hiddenPasswords ? faEyeSlash : faEye } />
      </span>
      <input
        className="hidden"
        type="checkbox"
        checked={ hiddenPasswords }
        onChange={ handleChange }
      />
    </label>
  );
}

export default HidePasswordsInput;

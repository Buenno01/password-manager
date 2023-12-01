import { faLink, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyToClipboard from './CopyToClipboard';

type PasswordCardProps = {
  serviceValue: string,
  loginValue: string,
  passwordValue: string,
  urlValue: string,
  id: number,
  handleDeletePassword: () => void,
  hiddenPasswords: boolean,
};

export default function PasswordCard({ id, loginValue, passwordValue,
  serviceValue, urlValue, handleDeletePassword, hiddenPasswords }:PasswordCardProps) {
  return (
    <div
      key={ id }
      className="bg-zinc-700 text-white rounded-xl p-3
      flex flex-col justify-between w-72 h-48"
    >
      <h3 className="flex text-2xl justify-between">
        <a target="_blank" href={ urlValue } rel="noreferrer">
          {serviceValue}
          <span className="ml-1 text-blue-400 text-md">
            <FontAwesomeIcon icon={ faLink } />
          </span>
        </a>
        <button
          onClick={ handleDeletePassword }
          aria-label="Delete this password"
          data-testid="remove-btn"
          className="bg-red-500 hover:bg-red-600 active:bg-red-400
          w-8 h-8 rounded-full text-xl"
        >
          <FontAwesomeIcon icon={ faTrashCan } />
        </button>
      </h3>
      <CopyToClipboard
        textToCopy={ loginValue }
      />
      <CopyToClipboard
        textToCopy={ passwordValue }
        hidden={ hiddenPasswords }
      />
    </div>
  );
}

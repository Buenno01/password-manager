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
    <div key={ id }>
      <button
        onClick={ handleDeletePassword }
        aria-label="Delete this password"
        data-testid="remove-btn"
      >
        X
      </button>
      <a target="_blank" href={ urlValue } rel="noreferrer">
        {serviceValue}
      </a>
      <p>{loginValue}</p>
      <p>{hiddenPasswords ? '******' : passwordValue}</p>
    </div>
  );
}

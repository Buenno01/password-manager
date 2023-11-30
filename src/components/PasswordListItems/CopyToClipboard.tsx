import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type CopyToClipboardProps = {
  textToCopy: string,
  hidden?: boolean,
};

function CopyToClipboard({ textToCopy, hidden = false }: CopyToClipboardProps) {
  const [wasCopied, setWasCopied] = useState(false);

  setTimeout(() => { setWasCopied(false); }, 400);
  function handleClick(text: string) {
    navigator.clipboard.writeText(text);
    setWasCopied(true);
  }
  return (
    <button
      onClick={ () => { handleClick(textToCopy); } }
      aria-label="copy to clipboard"
    >
      <span
        className="bg-zinc-800 py-2 px-5 rounded-lg
    flex justify-between cursor-pointer items-center"
      >
        {
        wasCopied && (
          <span className="text-green-300 flex gap-2 items-center">
            <FontAwesomeIcon icon={ faCheck } />
            Copiado
          </span>
        )
}
        {!wasCopied && (hidden ? '******' : textToCopy)}
        <FontAwesomeIcon icon={ faCopy } />
      </span>
    </button>
  );
}

export default CopyToClipboard;

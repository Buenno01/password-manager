import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CopyToClipboardProps = {
  textToCopy: string,
  hidden?: boolean,
};

function CopyToClipboard({ textToCopy, hidden = false }: CopyToClipboardProps) {
  return (
    <button
      onClick={ () => { navigator.clipboard.writeText(textToCopy); } }
      aria-label="copy to clipboard"
    >
      <span
        className="bg-zinc-800 py-2 px-5 rounded-lg
    flex justify-between cursor-pointer items-center"
      >
        {hidden ? '******' : textToCopy}
        <FontAwesomeIcon icon={ faCopy } />
      </span>
    </button>
  );
}

export default CopyToClipboard;

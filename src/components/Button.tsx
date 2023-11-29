import React from 'react';

export type ButtonProps = {
  text: string;
  disabled?: boolean,
  handleClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
};

function Button({ text, handleClick = undefined, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={ handleClick }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}

export default Button;

import React from 'react';

export type ButtonProps = {
  text: string;
  handleClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
};

function Button({ text, handleClick = undefined }: ButtonProps) {
  return (
    <button onClick={ handleClick }>
      { text }
    </button>
  );
}

export default Button;

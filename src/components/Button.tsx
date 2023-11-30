import React from 'react';

export type ButtonProps = {
  text: string;
  disabled?: boolean,
  handleClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  styles?: 'success' | 'danger' | 'info' | 'default',
};

function Button({ text, handleClick = undefined,
  disabled = false, styles = 'default' }: ButtonProps) {
  const colors = {
    success: 'green',
    danger: 'red',
    info: 'blue',
    default: 'fucshia',
  };
  return (
    <button
      onClick={ handleClick }
      disabled={ disabled }
      className={ `
      bg-${colors[styles]}-500 hover:bg-${colors[styles]}-600
      active:bg-${colors[styles]}-400
      disabled:opacity-60
      border border-${colors[styles]}-600 rounded-xl
      text-white font-medium
      w-full h-10` }
    >
      { text }
    </button>
  );
}

export default Button;

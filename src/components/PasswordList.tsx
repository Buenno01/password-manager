import React, { ReactNode } from 'react';

type PasswordListProps = {
  children: ReactNode,
};

export default function PasswordList({ children }:PasswordListProps) {
  return (
    <div>
      {children}
    </div>
  );
}

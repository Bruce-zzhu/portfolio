import React from 'react';
import { NavBar } from '../Navigation';

type Props = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <main className='pt-20 min-h-screen relative z-0 '>
      <NavBar />
      {children}
    </main>
  );
};

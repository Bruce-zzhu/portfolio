import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative z-0 bg-primary'>{children}</div>;
};

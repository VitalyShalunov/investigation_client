import React from 'react';
import { AuthProvider } from '../store/Auth';
import { Header } from './Header';

export function HeaderContainer({ activePage }: { activePage: string }) {
  return (
   <AuthProvider>
      <Header activePage={activePage} />
   </AuthProvider>
  );
}

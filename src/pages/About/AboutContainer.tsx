import React from 'react';
import { AboutProvider } from '../../store/About';
import { About } from './About';

export function AboutContainer() {
  return (
   <AboutProvider>
      <About />
   </AboutProvider>
  );
}

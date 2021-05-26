import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { GlobalStyle } from '../../theme/global-style';

import App from './App';
import { Main } from '../../theme/main';

export default function AppContainer() {
  return (
      <ThemeProvider theme={Main}>
      <>
        <App />
        <GlobalStyle />
        </>
      </ThemeProvider>
  );
}

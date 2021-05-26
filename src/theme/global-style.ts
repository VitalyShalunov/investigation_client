import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
  }

  :focus {
    outline: none; // элемент полчает фокус
  }

  ::-webkit-scrollbar { //to customize various parts of the scrollbar for webkit browsers:
    width: 6px;
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-track { // the buttons on the scrollbar (arrows pointing upwards and downwards).
    border-radius: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb { // the draggable scrolling handle
    border-radius: 8px;
    background-color: #cccccc;
  }
`;

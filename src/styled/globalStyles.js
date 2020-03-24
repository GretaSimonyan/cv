import { createGlobalStyle } from 'styled-components';
// import ArvoItalic from '../../src/assets/fonts/Arvo-Italic.ttf';
// import ArvoBold from '../../src/assets/fonts/Arvo-Bold.ttf';
// import ArvoRegular from '../../src/assets/fonts/Arvo-Regular.ttf';
// import ArvoBoldItalic from '../../src/assets/fonts/Arvo-BoldItalic.ttf';
import PlayfairDisplayRegular from '../../src/assets/fonts/PlayfairDisplay-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: "Play";
    src: url(${PlayfairDisplayRegular});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Play";
  }
  html{
    scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
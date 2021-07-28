import { createGlobalStyle } from 'styled-components';
import {colors} from './utils'

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;    
    }

    *,*:before, *:after {
        box-sizing: inherit;
    }

    body {                
      font-size: 62.5%;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      background-color: ${colors.blue_4};
    }

`;

export default GlobalStyle;
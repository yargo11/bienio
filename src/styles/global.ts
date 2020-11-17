import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/BG.png';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline: 0;
  box-sizing: border-box;
}

body{
  background:url(${bgImg});
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font: 16px Roboto, sans-serif;
}

#root{
  /* max-width:960px; */
  margin: 0 auto;
  padding: 0px 20px;
}
`;

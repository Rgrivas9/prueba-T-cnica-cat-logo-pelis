import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'open sans';
    src: url('../../open.ttf');
}
@font-face {
    font-family: 'san francisco';
    src: url('../../sf.otf');
}
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: Helvetica, Arial, sans-serif; 
   }
`
export default GlobalStyle

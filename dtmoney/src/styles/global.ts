import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33cc95;
    --shape: #ffffff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
}

*{
    margin : 0;
    padding: 0;
    box-sizing : border-box;
}

html{
    @media(max-with: 1080px){
        font-size: 93.75%; // 15px font global
    }

    @media(max-with: 720px){
        font-size: 87.5%; // 14px font global
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;    
}
//todos os botões da aplicação
button{
    cursor: pointer;
}
//todos os itens que estão desabilitados por padrão
//mostra uma flag de não permitido
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`


import styled from "styled-components";
import { darken, transparentize} from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    //cor de fundo placeholder

    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  //botao submit
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    //efeito quando passar mouse
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

//interface criada para que o botao tenha dois estados com styledcomponents
interface RadioBoxProps{
  isActive : boolean;
  activeColor : 'green' | 'red';
}

const colors = {
  green:'#33CC95',
  red: '#E53E40'
}

export const RadioBox = styled.button<RadioBoxProps>`

  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  // ternario passando uma função para o background do styledcomponents
  //por meio da props temos acesso a todos as propriedades do escopo
  //se a props.active == true , muda cor para green , senão fica tranparent
  background: ${(props) => 
  props.isActive 
  ? transparentize(0.9,colors[props.activeColor])
  : 'tranparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;
  //Utilizando a função do pacote polished
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

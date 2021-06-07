import logoImg from "../../assets/logo.svg";
import { Container } from "./styles";
import { Content } from "./styles";

//ao importar os estados e as Funções para o application
//A constante  handleOpenNewTransactionModal está em outo escopo
//Para que ela seja utizada neste escopo
//Criamos uma interface, e passamos para o Header como props

interface HeaderProps{
  onOpenNewTransactionModal : () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
        type="button"
        //este parametro recebido carrega a constante handleOpenNewTransactionModal
        //é necessário tb o componente Header 
        //receber no escopo principal quando for Declarado
        onClick = {onOpenNewTransactionModal}
        >Nova Transação
        </button>

         
      
        
      </Content>
    </Container>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import closeIcon from "../../assets/close.svg";

//as assianturas no Isopen e OnRequestClose estão na documentação
//do Modal.
//criamos a interface e tipamos oque vem como parametro do componente Modal
interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  
}

export function NewTransationModal({isOpen,onRequestClose}: NewTransactionsModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      //isOpen  = recebe o estado inicial
      isOpen={isOpen}
      //depois de aberto habilita a função para fechar com esc
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      

      <Container>
        <h2>Cadastrar transações</h2>
        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
            
        <RadioBox
            type="button"
            isActive={type === "deposit"}
            onClick={() => {setType("deposit");}}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </RadioBox>
        
          <RadioBox
            type="button"
            onClick={() => {setType("withdraw");}}
            isActive={type === "withdraw"}
            
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

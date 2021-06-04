import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

import closeIcon from "../../assets/close.svg";

//as assianturas no Isopen e OnRequestClose estão na documentação
//do Modal.
//criamos a interface e tipamos oque vem como parametro do componente Modal
interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransationModal({
  isOpen,
  onRequestClose,
}: NewTransactionsModalProps) {
  return (
    <Modal
      //isOpen  = recebe o estado inicial
      isOpen={isOpen}
      //depois de aberto habilita a função para fechar com esc
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
     <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transações</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Titulo" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

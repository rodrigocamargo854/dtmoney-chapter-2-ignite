import React, { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import {TransactionsContext} from "../../TransactionsContext"
import closeIcon from "../../assets/close.svg";
import { api } from "../../services/api";

//as assianturas no Isopen e OnRequestClose estão na documentação
//do Modal.
//criamos a interface e tipamos oque vem como parametro do componente Modal
interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({ isOpen, onRequestClose, }: NewTransactionsModalProps) {
    
    const {createTransaction} = useContext(TransactionsContext);

    const [type, setType] = useState("deposit");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");


    function handleCreationNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type
        })
    }

    return (
        
        <Modal
            //isOpen  = recebe o estado inicial
            isOpen={isOpen}
            //depois de aberto habilita a função para fechar com esc
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreationNewTransaction}>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeIcon} alt="Fechar modal" />
                </button>

                <h2>Cadastrar transações</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {
                            setType("deposit");
                        }}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {
                            setType("withdraw");
                        }}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
        </button>

            </Container>
        </Modal>
    );
}

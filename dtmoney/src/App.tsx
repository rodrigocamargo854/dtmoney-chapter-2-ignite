import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import Modal from 'react-modal';

import {TransactionProvider, TransactionsContext} from './TransactionsContext'
import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import {NewTransationModal} from "./components/NewTransationModal";


//função para setar a div principal para q o modal 
//por cima da div root
Modal.setAppElement('#root')

export function App() {

  

  const [isNewTransactionModalOpen, setIsiNewTransactionModalOpen] = useState(false);
  //criando função para  manipulação do modal 
  //abertura 
  function handleOpenNewTransactionModal(){
    setIsiNewTransactionModalOpen(true);
  }
  //abertura
  function handleCloseNewTransactionModal(){
    setIsiNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>

        <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal} />
        <Dashboard/>
        <NewTransationModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
        
        <GlobalStyle />
    </TransactionProvider>
  );
  
}

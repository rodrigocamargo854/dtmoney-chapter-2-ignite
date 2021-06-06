import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";
//importamos a lib createConext do react.
//Criamos uma constante para receber o valor default dos contextos

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
//1º forma
// interface TrasactionInput{
//     title: string;
//     amount: number;
//     type: string;
//     category: string;  
// }

/////////////////////////////////////////////////////////////////////////////////
//Ao criar  a interface TrasactionInput, repetimos alguns campos do Transaction
//2º forma de
//Podemos criar um type que herda todos os campos com exceção dos que não precisamos
//utilizando o omit(omitir) 
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//3º forma podemos usar o pick 
//type TransactionInput = pick<Transaction, 'title' | 'amount' | 'type' | 'category'>([]);
////////////////////////////////////////////////////////////////////////////

interface TrasactionsProviderProps {
  children: ReactNode;
}

interface TrasactionContexData{
    transactions: Transaction[];
    createTransaction: ( transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TrasactionContexData>({} as TrasactionContexData);

//Colocamos o TransactionsContext.Provider por volta de todo App

export function TransactionProvider({ children }: TrasactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //podemos modificar a rota em um futuro que
  //neste momento o backend não está pronto
  useEffect(() => {
    api
      .get("transactions") //pegar esta resposta
      .then((response) => setTransactions(response.data.transactions)); //mostrar no console
  }, []);

  function createTransaction(transaction : TransactionInput) {
    //chamada da api para reuisição post no escopo index
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions,createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

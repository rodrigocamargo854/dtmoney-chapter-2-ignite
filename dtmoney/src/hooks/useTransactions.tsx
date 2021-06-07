import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContexData{
    transactions: Transaction[];
    createTransaction: ( transaction: TransactionInput) => Promise<void>;
}

 const TransactionsContext = createContext<TransactionContexData>({} as TransactionContexData);

//Colocamos o TransactionsContext.Provider por volta de todo App

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //podemos modificar a rota em um futuro que
  //neste momento o backend não está pronto
  useEffect(() => {
    api
      .get("transactions") //pegar esta resposta
      .then((response) => setTransactions(response.data.transactions)); //mostrar no console
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{transactions,createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}
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

interface TrasactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

//Colocamos o TransactionsContext.Provider por volta de todo App

export function TransactionProvider({children} : TrasactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //podemos modificar a rota em um futuro que
  //neste momento o backend não está pronto
  useEffect(() => {
    api
      .get("transactions") //pegar esta resposta
      .then((response) => setTransactions(response.data.transactions)); //mostrar no console
  }, []);

  return <TransactionsContext.Provider value={transactions} >
        {children}

  </TransactionsContext.Provider>;
}

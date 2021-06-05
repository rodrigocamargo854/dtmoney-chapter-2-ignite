import { Container } from "../Summary/styles";
import incomeIcon from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import React, { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){

    //As trasactions não estão mais neste escopo e sim no escopo 
    //do TrasactionsContext
    const transactions = useContext(TransactionsContext);
    console.log(transactions);

   return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> - R$500,00</strong>
            </div>           
            <div className="hightlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}
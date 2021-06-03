import { useEffect } from "react";
import { Container } from "../TransationsTable/styles";
import { api } from "../../services/api"
//importanto o mirage js

export function TransationsTable() {
    //podemos modificar a rota em um futuro que
    //neste momento o backend não está pronto

    useEffect(() => {
        api.get('transactions')//pegar esta resposta
        .then(response => console.log(response.data))//mostrar no console
    },[]);

   return (
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>               
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="withdraw"> - R$10</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    
                   
                </tbody>
            </table>
        </Container>
    )
}



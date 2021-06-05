import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs'; // chamar esta função no index
import schema from 'miragejs/orm/schema';

 //todas chamadas que a api que serao feitas
  //estarao a partir do endereço api
createServer({
  models:{
    transactions: Model,
  },
  //função seeds  para pre-cadastrar dados para inicio
  //semear servidor
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Aplicação Web com ReactJS",
          type: "deposit",
          category: "jobs",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "house",
          amount: 800,
          createdAt: new Date("2021-03-01 10:00:00"),
        },
      ],
    });
  },


 
  routes(){
    this.namespace = 'api';
    //valores simulados de um retorno da api
    //para requisições get neste endpoint 
    //retorne tudo
    this.get('/transactions', () => {
      
      return this.schema.all('transactions')

    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions',data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


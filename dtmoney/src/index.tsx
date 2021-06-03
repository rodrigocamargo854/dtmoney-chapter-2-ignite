import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer} from 'miragejs'; // chamar esta função no index

 //todas chamadas que a api que serao feitas
  //estarao a partir do endereço api
createServer({

 
  routes(){
    this.namespace = 'api';
    //valores simulados de um retorno da api

    this.get('/transactions', () => {
      return[
        {
          id:1,
          title: 'transactions ',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


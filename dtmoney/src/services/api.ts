//serviço de dados
import axios from 'axios'; 

//criando uma isntancia do axios e setar padrões

export  const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    //poderiamos colocar tokens de atutenticação 
    //com o ehaders
})
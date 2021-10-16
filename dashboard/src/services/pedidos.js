import axios from 'axios';
// import { api } from './config';

export default {
    listar: () => {
        let data  = [];
        let config = {
            method: 'get',
            url: 'https://localhost:44358/pedido/listar?pagina=1',
            headers: { 
                'token': 'Bearer asdfghjkl123456789', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        let resposta = axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });

        return resposta;
    }
}
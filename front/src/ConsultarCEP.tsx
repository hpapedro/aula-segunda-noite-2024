//Regras para criação de um novo componente 
//1 - A primeira letra do componente deve ser maiúscula
//2 - O componente deve ser uma função
//3 - O componente deve retornar apenas um elemento HTML
//4 - Eu preciso exportar o componente
import { useEffect } from "react";

function ConsultarCEP(){
    useEffect(() =>{
        //evento de carregamento do componente 
        //executar código ao abrir carregar o componente
        //AXIOS - Biblioteca de requisições

        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then(endereco =>{
                console.log(endereco.localidade);
            });

    });

    return(
        <div>
            <h1>ConsultarCEP</h1> 
        </div>
    );
}

export default ConsultarCEP;

//Exercicios 
//1 - Exibir os dados no HTML/Página
//2 - Realizar a requisição para a sua api
//3 - Resolver o problema de CORS
//4 - Exibir a lista de produtos no HTML
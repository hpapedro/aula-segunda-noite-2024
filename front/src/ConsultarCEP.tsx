//Regras para criação de um novo componente 
//1 - A primeira letra do componente deve ser maiúscula
//2 - O componente deve ser uma função
//3 - O componente deve retornar apenas um elemento HTML
//4 - Eu preciso exportar o componente
import { useEffect, useState } from "react";

function ConsultarCEP() {
    // Definindo os estados para armazenar os dados
    const [localidade, setLocalidade] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");

    useEffect(() =>{
        //evento de carregamento do componente 
        //executar código ao abrir carregar o componente
        //AXIOS - Biblioteca de requisições
    })

    function pesquisarCEP(){
        fetch("https://viacep.com.br/ws/01001000/json/")
        .then((resposta) => resposta.json())
        .then((endereco) => {
            setLocalidade(endereco.localidade);
            setLogradouro(endereco.logradouro);
            setEstado(endereco.estado);
    });

    }
    function sairFoco(){
        ConsultarCEP();
    }

    function digitar() {
        console.log("Digitei algo na caixa de texto");
    }
    function clicar(){

    }

    
    return (
        <div>
            <h1>Consultar CEP</h1>
            <input
                type="text"
                placeholder="Digite o seu CEP"
                onChange={digitar} // Apenas para detectar mudanças no input
            />
            <button onClick={pesquisarCEP}>Consultar CEP</button>

            <p><strong>Localidade:</strong> {localidade}</p>
            <p><strong>Estado:</strong> {estado}</p>
            <p><strong>Logradouro:</strong> {logradouro}</p>
            <p><strong>CEP:</strong> {cep}</p>
        </div>
    );
};




export default ConsultarCEP;

//Exercicios 
//1 - Exibir os dados no HTML/Página
//2 - Realizar a requisição para a sua api
//3 - Resolver o problema de CORS
//4 - Exibir a lista de produtos no HTML
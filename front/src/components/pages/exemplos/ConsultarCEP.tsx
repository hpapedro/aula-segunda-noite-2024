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

    function pesquisarCEP() {
        fetch("https://viacep.com.br/ws/" + cep + "/json/")
          .then((resposta) => resposta.json())
          .then((endereco) => {
            setLocalidade(endereco.localidade);
            setLogradouro(endereco.logradouro);
            setEstado(endereco.estado);
          });
      }
    function sairFoco(){
        pesquisarCEP();
    }

    function digitar(event: any) {
        setCep(event.target.value);
    }
    function clicar(){
        pesquisarCEP();
    }

    
    return (
        <div id="consultar_cep">
            <h1>Consultar CEP</h1>

            <input
                type="text"
                placeholder="Digite o seu CEP"
                onChange={digitar} // Apenas para detectar mudanças no input
                onBlur={sairFoco}
            />
            <button onClick={pesquisarCEP}>Consultar CEP</button>

            <p> {localidade} </p>
            <p> {estado} </p>
            <p> {logradouro} </p>
            <p> {localidade}    </p>
            
        </div>
    );
};

export default ConsultarCEP;

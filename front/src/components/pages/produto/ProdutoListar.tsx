import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import "./ProdutoListar.css"

function ProdutoListar(){

    const [produtos, setProdutos] = useState<Produto[]>([]);
    
    useEffect(() =>{
        pesquisarProdutos();
    });

function pesquisarProdutos(){
    fetch("http://localhost:5085/api/produto/listar")
    .then((resposta) => resposta.json())
    .then((produtos) => {
        //console.table(produtos);
        setProdutos(produtos);
    });
}

function excluirProduto(id: string) {
    fetch(`http://localhost:5085/api/produto/deletar/${id}`, {
      method: "DELETE",
    })
      .then((resposta) => {
        if (resposta.ok) {
          alert("Produto excluído com sucesso!");
          // Atualizar a lista após exclusão
          setProdutos(produtos.filter((produto) => produto.id !== id));
        } else {
          alert("Erro ao excluir o produto.");
        }
      })
      .catch(() => alert("Falha ao conectar com o servidor."));
  }

    return( 
    <div id="listar_produtos">
        <h1>Lista de Produtos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Criado em</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            {produtos.map(produto => (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.valor}</td>
                <td>{produto.criadoEm}</td>
                <td>
                    <button onClick={() => excluirProduto(produto.id!)}>
                        Excluir
                    </button>
                </td>
            </tr>
        ))} 
            </tbody>
        </table> 
    </div>
    );
}

export default ProdutoListar;
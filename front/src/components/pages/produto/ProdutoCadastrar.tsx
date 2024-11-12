import React, { useState } from 'react';
import { Produto } from '../../../models/Produto';

function ProdutoCadastrar() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    
    
    function enviarProduto(event: any){
        event.prevenDefault();
        const produto : Produto = { 
          nome: nome,
          descricao: descricao,
          quantidade: Number(quantidade),
          valor: Number(preco),
            
        };
    }
  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form id ="form-cadastro">
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" 
          id="nome" name="nome" 
          placeholder="Nome do Produto" 
          required 
          onChange={(event: any) => setNome(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input type="descricao"
          name="descricao"  
          placeholder="Descrição do Produto" 
          onChange={(event: any) => setDescricao(event.target.value)}
          required/>
          
          
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input type="number" 
          id="quantidade" 
          name="quantidade" 
          placeholder="Ex: 50" 
          onChange={(event: any) => setQuantidade(event.target.value)}
          required />
        </div>

        <div className="form-group">
          <label htmlFor="valor">Preço:</label>
          <input type="number" 
          id="valor" 
          name="valor" 
          step="0.01" 
          required 
          onChange={(event: any) => setPreco(event.target.value)} />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProdutoCadastrar;

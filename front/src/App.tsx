import React from "react";
import ConsultarCEP from "./components/pages/exemplos/ConsultarCEP";
import ComponenteExemplo from "./components/pages/exemplos/CompontenteExemplo";
import ProdutoListar from "./components/pages/produto/ProdutoListar"
import ProdutoCadastrar from "./components/pages/produto/ProdutoCadastrar";


function App() {
  return (
    <div>
      {/*<ConsultarCEP/>*/}
      <ProdutoCadastrar/>
      <ProdutoListar/>
      
    </div>
  );
}

export default App;
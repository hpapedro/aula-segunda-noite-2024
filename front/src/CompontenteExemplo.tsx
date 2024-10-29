//Regras para criação de um novo componente 
//1 - A primeira letra do componente deve ser maiúscula
//2 - O componente deve ser uma função
//3 - O componente deve retornar apenas um elemento HTML
//4 - Eu preciso exportar o componente


function ComponenteExemplo(){
    return(
        <div>
            <h1>Primero post</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Blanditiis dolorem pariatur officiis libero. Praesentium voluptatibus, 
                reiciendis beatae, ab minima iure deserunt laborum omnis pariatur porro 
                explicabo consequatur quos. Similique, laborum.
            </p>
        </div>
    );
}

export default ComponenteExemplo;
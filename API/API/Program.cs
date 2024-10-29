//Minimal APIs em C#
//Testar a API
// - Rest Client - Extensão VS Code
// - Postman
// - Insomnia
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

//Adicionando o serviço de banco de dados na aplicação
builder.Services.AddDbContext<AppDataContext>();

var app = builder.Build();

List<Produto> produtos = new List<Produto>
{
    new Produto { Nome = "Apple iPhone 14", Valor = 999.99, Quantidade = 10 },
    new Produto { Nome = "Samsung Galaxy S23", Valor = 899.99, Quantidade = 5 },
    new Produto { Nome = "Sony WH-1000XM5", Valor = 349.99, Quantidade = 20 },
    new Produto { Nome = "Dell XPS 13", Valor = 1199.99, Quantidade = 8 },
    new Produto { Nome = "Apple MacBook Pro", Valor = 2399.99, Quantidade = 15 },
    new Produto { Nome = "Bose QuietComfort 35 II", Valor = 299.99, Quantidade = 12 },
    new Produto { Nome = "Nintendo Switch", Valor = 299.99, Quantidade = 7 },
    new Produto { Nome = "GoPro HERO10", Valor = 499.99, Quantidade = 25 },
    new Produto { Nome = "Kindle Paperwhite", Valor = 139.99, Quantidade = 30 },
    new Produto { Nome = "Sony PlayStation 5", Valor = 499.99, Quantidade = 18 }
};

//Endpoints - Funcionalidades
//Requisição - URL e método/verbo HTTP
//Resposta - Dados (json/xml) e código HTTP de status
//GET: /
app.MapGet("/", () => "API de Produtos");

//GET: /api/produto/listar
app.MapGet("/api/produto/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Produtos.Any())
    {
        return Results.Ok(ctx.Produtos.ToList());
    }
    return Results.NotFound();
});

//GET: /api/produto/buscar/{id}
app.MapGet("/api/produto/buscar/{id}", ([FromRoute] string id,
    [FromServices] AppDataContext ctx) =>
{
    //Buscar pela PK
    Produto? produto = ctx.Produtos.Find(id);
    //Buscar por qualquer campo que não seja a PK
    //Produto? produto = produtos.FirstOrDefault(x => x.Id == id);

    //Filtrar por qualquer campo da sua tabela   
    //List<Produto> lista = ctx.Produtos.Where(x => x.Quantidade > 10).ToList();

    if (produto == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(produto);
});

//POST: /api/produto/cadastrar
app.MapPost("/api/produto/cadastrar", ([FromBody] Produto produto,
    [FromServices] AppDataContext ctx) =>
{
    ctx.Produtos.Add(produto);
    ctx.SaveChanges();
    return Results.Created("", produto);
});

//DELETE: /api/produto/deletar/{id}
app.MapDelete("/api/produto/deletar/{id}", ([FromRoute] string id,
    [FromServices] AppDataContext ctx) =>
{
    Produto? produto = ctx.Produtos.Find(id);
    if (produto == null)
    {
        return Results.NotFound();
    }
    ctx.Produtos.Remove(produto);
    ctx.SaveChanges();
    return Results.Ok(produto);
});

//PUT: /api/produto/alterar/{id}
app.MapPut("/api/produto/alterar/{id}", ([FromRoute] string id,
    [FromBody] Produto produtoAlterado, [FromServices] AppDataContext ctx) =>
{
    Produto? produto = ctx.Produtos.Find(id);
    if (produto == null)
    {
        return Results.NotFound();
    }
    produto.Nome = produtoAlterado.Nome;
    produto.Quantidade = produtoAlterado.Quantidade;
    produto.Valor = produtoAlterado.Valor;
    ctx.Produtos.Update(produto);
    ctx.SaveChanges();
    return Results.Ok(produto);
});


app.Run();
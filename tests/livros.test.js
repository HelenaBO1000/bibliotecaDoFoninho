
/*
TESTES para ADICIONAR LIVROS
*/
const {
    add
    , remove
    , get
    , listLivroByTitulo
    , listLivroByGenero
    , markAsLido
    , estatistics
} = require("../js/livros");

test("deve adicionar um livro à coleção", () => {

    const livros = [];

    const livro = {
        id: 1,
        titulo: "JavaScript",
        autor: "Autor",
        genero: "Programação",
        paginas: 300,
        lido: false
    };

    const resultado = add(livros, livro);

    expect(resultado).toHaveLength(1);
    expect(resultado[0]).toEqual(livro);
});

/*
Testes do Pesquisar Livros
*/

test("deve encontrar livros pelo título", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];
    //chamando a função para testes
    const resultado = listLivroByTitulo(livros,"javascript");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe("JavaScript");
});

test("pesquisa sem correspondência deve retornar array vazio", () => {
    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = listLivroByTitulo(livros,"Python");

    expect(resultado).toHaveLength(0);
});

/*
Testes do Filtrar Livros
*/
test("deve encontrar livros pelo genero", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = listLivroByGenero(livros,"web");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe("HTML e CSS");
});

/*
Testes do marcar como lido
*/
test("deve marcar como lido", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = markAsLido(livros, 1);

    expect(resultado[0].lido).toBe(true);
});

/*
Testes do buscar por id
*/
test("deve buscar por id", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = get(livros, 1);

    expect(resultado).toBe(livros[0]);
});
/*
Testes de remover livros
*/
test("deve remover o livro", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        },
        {
            id: 3,
            titulo: "PC Web",
            autor: "Autor C",
            genero: "Web",
            paginas: 250,
            lido: true
        }
    ];

    const resultado = remove(livros, 2);

    expect(resultado).toEqual([
  { autor: "Autor A", genero: "Programação", id: 1, lido: false, paginas: 300, titulo: "JavaScript" },
  { autor: "Autor C", genero: "Web", id: 3, lido: true, paginas: 250, titulo: "PC Web" }
]);

});
/*
Testes das estatísticas
*/
test("deve calcular as estatísticas dos livros", () => {

    const livros = [
        {
            id: 1,
            titulo: "JavaScript",
            autor: "Autor A",
            genero: "Programação",
            paginas: 300,
            lido: false
        },
        {
            id: 2,
            titulo: "HTML e CSS",
            autor: "Autor B",
            genero: "Web",
            paginas: 250,
            lido: true
        },
        {
            id: 3,
            titulo: "CSS Avançado",
            autor: "Autor C",
            genero: "Web",
            paginas: 400,
            lido: true
        },
        {
            id: 4,
            titulo: "Node.js",
            autor: "Autor D",
            genero: "Programação",
            paginas: 350,
            lido: false
        }
    ];

    const resultado = estatistics(livros);

    expect(resultado.quantidadeDeLivros).toBe(4);
    expect(resultado.livrosLidos).toBe(2);

    expect(resultado.porcentagemDeLivros).toBe(0.5);

    expect(resultado.porcentagemGenero).toEqual({
        Programação: "50.00%",
        Web: "50.00%"
    });
});

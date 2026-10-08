const livros = []

/**
 * Função para adicionar novos livros na coleção
 * @param {*} livros - array de livros
 * @param {*} livro - um novo livro
 * @returns colecao com o novo livro adicionado
 */
const add = (livros, livro) => {
    livros.push(livro)
    return livros
}

/**
 * 
 * @param {*} id 
 */
const get = (livros, id) => livros.find(livro=>livro.id ==id)

/**
 * Função que pesquisa livros em uma coleção
 * @param {*} livros - a coleção
 * @param {*} termo - fragmento de título para a pesquisa
 * @returns array de livros filtrados
 */
const listLivroByTitulo = (livros, termo) => 
    livros.filter(livro => 
        livro.titulo.toLowerCase().includes(termo.toLowerCase()))

/**
 * lista por gênero
 * @param {*} livros 
 * @param {*} genero 
 * @returns array de livros filtrados
 */
const listLivroByGenero = (livros, genero) =>
    livros.filter(livro => 
        livro.genero.toLowerCase().includes(genero.toLowerCase()))

/**
 * deve marcar o livro como lido
 * @param {*} livros 
 * @param {*} id 
 * @returns livros com o livro como lido
 */
const markAsLido = (livros, id) => {
    let livro = livros.find(livro => livro.id == id);
    livro.lido = true;
    return livros;
}
/**
 * 
 * @param {*} livros 
 * @param {*} id 
 * @returns livros sem o livro removido
 */
const remove = (livros, id) => {
    let local = id -1;
    livros.splice(local, 1);
    return livros;
}
/**
 * gera estatisticas (quantidade e porcantagem de livros lidos, quantidade e porcentagem de generos e quantidade total de livros)
 * @param {*} livros 
 */
const estatistics = (livros) => {
    const livrosLidos = livros.filter(livro => livro.lido == true).length;
    const quantidadeDeLivros = livros.length;
    const porcentagemDeLivros = livrosLidos / quantidadeDeLivros;

    const livrosGenero = Object.groupBy(livros, livro => livro.genero);
    const porcentagemGenero = {};

    for (const genero in livrosGenero) {
        const quantidade = livrosGenero[genero].length;

        porcentagemGenero[genero] =
            `${((quantidade / quantidadeDeLivros) * 100).toFixed(2)}%`;
    }

    return {
        quantidadeDeLivros,
        livrosLidos,
        porcentagemDeLivros,
        porcentagemGenero
    };
};

// dá visibilidade a algumas funções do arquivo js.
module.exports= {add
    , remove
    , get
    , listLivroByTitulo
    , listLivroByGenero
    , markAsLido
    , estatistics
};
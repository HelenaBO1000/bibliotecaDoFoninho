const livros =[]

/**
 * Função para adicionar livros na coleção
 * @param {*} livros -array de livros
 * @param {*} livro - um novo livro
 * @returns colecao com novo livro
 */
const adicionarLivro = (livros, livro) => {
    livros.push(livro)
    return livros
}

const listar = id => {

}

/**
 * Função que pesquisa livros pelo titulo
 * @param {*} livros - array de livros
 * @param {*} titulo - parâmetro de pesquisa
 */
const pesquisarLivros = (livros, titulo) => {
    
}

const filtrar = genero =>{

}

const marcarComoLido = id => {

}

const remover = id =>{

}

const estatisticas = () =>{

}

//dá visibilidade a algumas funções do arquivo.js
module.exports = {adicionarLivro, pesquisarLivros}
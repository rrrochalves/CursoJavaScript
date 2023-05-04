const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elemento = document.getElementById(this.id);
    const categoria = elemento.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const total = calcularValorTotal(livrosFiltrados);
        exibirValorTotal(total);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(total) {
    elementoValorTotal.innerHTML = `
                                <div class="livros__disponiveis">
                                    <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
                                </div>
                                   `;
}
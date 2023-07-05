async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJSON = await conexao.json();
    console.log(conexaoJSON);

    return conexaoJSON;
}

async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conectaApi.ok) {
        throw new Error("Não foi possivel enviar o video");
    }
    const conexaoJSON = await conexao.json();

    return conexaoJSON;
}

async function buscaVideo(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);
    const conexaoJSON = await conexao.json();
    return conexaoJSON;
}

export const conectaApi = {
    listaVideos, criaVideos, buscaVideo
}

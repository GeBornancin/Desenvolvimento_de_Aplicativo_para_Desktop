const h1Pergunta = document.getElementById('h1Pergunta');
const h1Resposta = document.getElementById('h1Resposta');
const btPiada = document.getElementById('btPiada');
const btResposta = document.getElementById('btResposta');
const reacao = document.getElementById('reacao')

function gerarPiada() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt').then(response => {
        const piada = response.data;
        h1Pergunta.textContent = piada.setup;
        h1Resposta.textContent = ''; // Limpa a resposta ao gerar nova piada
    });
}

function gerarResposta() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt').then(response => {
        const piada = response.data;
        h1Resposta.textContent = piada.delivery;
    });
    axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        const reacaoUrl = response.data[0].url
        reacao.src = reacaoUrl
    })
}
function gerarImagem(){
   
}

btResposta.addEventListener('click', () => {
    gerarResposta();
    gerarImagem()
    console.log('Fui clicado');
});

btPiada.addEventListener('click', () => {
    gerarPiada();
    console.log('Fui clicado');
});

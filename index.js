let phrasalVerbs = [];
let indicesUsados = [];
let acertos = 0;
let erros = 0;

function carregarDados() {
    fetch('base.json')
    .then(response => response.json())
    .then(dados => {
        phrasalVerbs = dados;
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

function iniciarJogo() {
    document.getElementById('startButton').style.display = 'none';  // Esconde o botão iniciar
    if (indicesUsados.length >= phrasalVerbs.length) {
        mostrarBotaoReinicio();
        return;
    }
    const verbEscolhido = escolherPhrasalVerbAleatorio();
    atualizarInterface(verbEscolhido);
}

function mostrarBotaoReinicio() {
    document.getElementById('restartButton').style.display = 'block';  // Mostra o botão de reinício
}

function reiniciarJogo() {
    indicesUsados = [];
    acertos = 0;
    erros = 0;
    atualizarContadores();
    document.getElementById('restartButton').style.display = 'none';  // Esconde o botão de reinício
    iniciarJogo();  // Inicia o jogo imediatamente
}

function escolherPhrasalVerbAleatorio() {
    let index;
    do {
        index = Math.floor(Math.random() * phrasalVerbs.length);
    } while (indicesUsados.includes(index));
    indicesUsados.push(index);
    return phrasalVerbs[index];
}

function atualizarInterface(verbEscolhido) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.innerHTML = `Qual é o significado de "<span style='color: #007BFF;'>${verbEscolhido.phrasal_verb}</span>"?`;
    optionsElement.innerHTML = '';

    const significados = gerarOpcoesDeSignificados(verbEscolhido);
    significados.forEach(significado => {
        const button = document.createElement('button');
        button.innerText = significado;
        button.onclick = () => handleResponse(button, significado, verbEscolhido.significado);
        optionsElement.appendChild(button);
    });
}

function handleResponse(button, givenAnswer, correctAnswer) {
    disableButtons();
    if (givenAnswer === correctAnswer) {
        button.classList.add('correct');
        acertos++;
    } else {
        button.classList.add('incorrect');
        erros++;
    }
    atualizarContadores();
    setTimeout(iniciarJogo, 1500);  // Continua após 1,5 segundos
}

function disableButtons() {
    document.querySelectorAll('#options button').forEach(button => {
        button.disabled = true;
    });
}

function gerarOpcoesDeSignificados(verb) {
    let significados = [verb.significado];

    while (significados.length < 4) {
        const index = Math.floor(Math.random() * phrasalVerbs.length);
        const possivelSignificado = phrasalVerbs[index].significado;
        if (!significados.includes(possivelSignificado)) {
            significados.push(possivelSignificado);
        }
    }

    significados.sort(() => Math.random() - 0.5); // Embaralha os significados
    return significados;
}

function atualizarContadores() {
    document.getElementById('acertos').innerText = acertos;
    document.getElementById('erros').innerText = erros;
}

document.addEventListener('DOMContentLoaded', carregarDados);

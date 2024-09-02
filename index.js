let phrasalVerbs = [];
let indicesUsados = [];
let acertos = 0;
let erros = 0;
let perguntaAtual = 1;

function carregarDados() {
    fetch('base.json')
        .then(response => response.json())
        .then(dados => {
            phrasalVerbs = dados;
            carregarProgresso();
            if (perguntaAtual <= phrasalVerbs.length) {
                iniciarJogo(); // Inicia o jogo se houver progresso salvo
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}

function iniciarJogo() {
    document.getElementById('startButton').style.display = 'none';  // Esconde o botão iniciar
    document.getElementById('continueButton').style.display = 'none';  // Esconde o botão continuar
    document.getElementById('resetButton').style.display = 'none';  // Esconde o botão de reinício
    document.getElementById('restartAppButton').style.display = 'block';  // Esconde o botão de reinício da aplicação

    if (indicesUsados.length >= phrasalVerbs.length) {
        mostrarBotaoReinicio();
        return;
    }

    if (perguntaAtual <= phrasalVerbs.length) {
        const verbEscolhido = phrasalVerbs[indicesUsados[perguntaAtual - 1]] || escolherPhrasalVerbAleatorio();
        atualizarInterface(verbEscolhido);
        salvarProgresso();  // Salva progresso a cada início de nova pergunta
    }
}

function mostrarBotaoReinicio() {
    document.getElementById('resetButton').style.display = 'block';  // Mostra o botão de reinício
    document.getElementById('restartAppButton').style.display = 'block';  // Mostra o botão de reinício da aplicação
}

function resetarJogo() {
    sessionStorage.clear();  // Limpa o sessionStorage
    indicesUsados = [];
    acertos = 0;
    erros = 0;
    perguntaAtual = 1;
    atualizarContadores();
    atualizarProgresso();
    iniciarJogo();  // Inicia o jogo imediatamente
}

function reiniciarAplicacao() {
    sessionStorage.clear();  // Limpa o sessionStorage
    indicesUsados = [];
    acertos = 0;
    erros = 0;
    perguntaAtual = 1;
    atualizarContadores();
    atualizarProgresso();

    // Aqui você pode forçar a recarregar a página para garantir que o jogo comece do início
    location.reload();  // Recarrega a página, reiniciando a aplicação
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

    questionElement.innerHTML = `Selecione todos os significados corretos para "<span style='color: #007BFF;'>${verbEscolhido.phrasal_verb}</span>"`;

    optionsElement.innerHTML = '';
    const significados = gerarOpcoesDeSignificados(verbEscolhido);

    significados.forEach(significado => {
        const button = document.createElement('button');
        button.innerText = significado;
        button.dataset.significado = significado;
        button.onclick = () => handleResponse(button, significado, verbEscolhido.significado);
        optionsElement.appendChild(button);
    });
    atualizarProgresso(); // Atualiza o progresso na tela
}

function handleResponse(button, givenAnswer, correctAnswers) {
    const isCorrect = correctAnswers.includes(givenAnswer);
    button.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        acertos++;
        button.disabled = true;
    } else {
        erros++;
    }

    atualizarContadores();

    if (verificarSeTodosOsCorretosSelecionados(correctAnswers)) {
        document.getElementById('continueButton').style.display = 'block';  // Mostra o botão de continuar
    }
}

function verificarSeTodosOsCorretosSelecionados(correctAnswers) {
    const buttons = document.querySelectorAll('#options button');
    const selectedCorrectAnswers = Array.from(buttons).filter(button =>
        button.classList.contains('correct') && correctAnswers.includes(button.innerText)
    );

    return selectedCorrectAnswers.length === correctAnswers.length;
}

function disableButtons() {
    document.querySelectorAll('#options button').forEach(button => {
        button.disabled = true;
    });
}

function continuarJogo() {
    document.getElementById('continueButton').style.display = 'none';  // Esconde o botão continuar
    perguntaAtual++; // Incrementa a pergunta atual somente ao continuar
    iniciarJogo();  // Vai para a próxima pergunta
}

function gerarOpcoesDeSignificados(verb) {
    let significados = [...verb.significado]; // Inicia com todos os significados corretos
    let significadosPossiveis = new Set(significados); // Usar um Set para evitar duplicatas

    // Adiciona significados aleatórios até que a lista atinja 9 opções
    while (significados.length < 9) {
        const index = Math.floor(Math.random() * phrasalVerbs.length);
        const possiveisSignificados = phrasalVerbs[index].significado;

        possiveisSignificados.forEach(significado => {
            if (!significadosPossiveis.has(significado) && significados.length < 9) {
                significados.push(significado);
                significadosPossiveis.add(significado);
            }
        });
    }

    significados.sort(() => Math.random() - 0.5); // Embaralha os significados
    return significados;
}

function atualizarContadores() {
    document.getElementById('acertos').innerText = acertos;
    document.getElementById('erros').innerText = erros;
}

function atualizarProgresso() {
    document.getElementById('progress').innerText = `Pergunta ${perguntaAtual} de ${phrasalVerbs.length}`;
}

function salvarProgresso() {
    sessionStorage.setItem('indicesUsados', JSON.stringify(indicesUsados));
    sessionStorage.setItem('acertos', acertos);
    sessionStorage.setItem('erros', erros);
    sessionStorage.setItem('perguntaAtual', perguntaAtual);
}

function carregarProgresso() {
    const indices = sessionStorage.getItem('indicesUsados');
    const acertosSalvos = sessionStorage.getItem('acertos');
    const errosSalvos = sessionStorage.getItem('erros');
    const perguntaAtualSalva = sessionStorage.getItem('perguntaAtual');

    if (indices) indicesUsados = JSON.parse(indices);
    if (acertosSalvos) acertos = parseInt(acertosSalvos);
    if (errosSalvos) erros = parseInt(errosSalvos);
    if (perguntaAtualSalva) perguntaAtual = parseInt(perguntaAtualSalva);

    atualizarContadores();
    atualizarProgresso();
}

document.addEventListener('DOMContentLoaded', carregarDados);

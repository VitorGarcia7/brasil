const perguntas = [
    {
        pergunta: "Qual a capital do Brasil?",
        respostas: ["Brasília", "Rio de Janeiro", "Araguari", "Xique Xique"],
        correta: 0
    },
    {
        pergunta: "Que lingua é oficialmente falada no Brasil?",
        respostas: ["Protugeís", "Português de Portugal", "Ching Chong", "Português Brasileiro"],
        correta: 3
    },
    {
        pergunta: "Qual é o bioma onde fica a maior floresta tropical do mundo?",
        respostas: ["Amazônia", "Pampa", "Caatinga", "Cerrado"],
        correta: 0
    },
    {
        pergunta: "Qual é o nome da maior cidade brasileira em população?",
        respostas: ["Cuiz Cuís", "Serra da Saudade", "São Paulo", "Brazil"],
        correta: 2
    },
    {
        pergunta: "Qual é a cor da faixa central da bandeira do Brasil (onde está escrito “Ordem e Progresso”)?",
        respostas: ["Verde", "Branco", "Amarelo", "Preto claro"],
        correta: 1
    }
]

const titulo = document.querySelector("h1")
const respostas = document.querySelector(".respostas p")
const botaoProximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

let perguntaAtual = 0
let respostaSelecionada = null;

function carregarPergunta(){
    const questao = perguntas[perguntaAtual]
    titulo.innerText = questao.pergunta

    respostas.forEach((resposta, indice) => {
        resposta.innerText = questao.pergunta[indice]
        resposta.classList.remove("selecionada")
    })

    respostaSelecionada = null;
    botaoProximo.classList.remove("ativo");
    botaoProximo.disabled = true;
    botaoProximo.style.pointerEvents = "none";
}

respostas.forEach((resposta, indice) => {
    resposta.addEventListener("click", () => {
        respostas.forEach(resposta => resposta.classList.remove("selecionada"));
        resposta.classList.add("selecionada");

        respostaSelecionada = indice;

        botaoProximo.classList.add("ativo");
        botaoProximo.disabled = false;
        botaoProximo.style.pointerEvents = "auto";
    })
})

botaoProximo.addEventListener("click", () => {
    // Verificar se acertou
    const correta = perguntas[perguntaAtual].correta;

    if (respostaSelecionada === correta) {
        console.log("ACERTOU!");
    } else {
        console.log("ERROU!");
    }
        perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarQuiz();
    }
});

function finalizarQuiz() {
    document.querySelector(".popUp").innerHTML = `
        <h1>Fim do Quiz!</h1>
        <p>Muito bem! Você concluiu todas as perguntas.</p>
    `;
}
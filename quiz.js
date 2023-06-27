const acertos1 = document.querySelector('.certos')

const startQuiz = document.querySelector(".start-quiz");
const containerInicio = document.querySelector(".container-inicio");
const questions = document.querySelector(".questions");
const enviar = document.querySelector(".enviar-questao");
const resultado = document.querySelector(".container-resultado");
const pontuacao = document.querySelector(".p-pontuacao");
const buttonRestart = document.querySelector(".restart-button");

const opcaoUm = document.getElementById("q-1-1");
const opcaoDois = document.getElementById("q-1-2");
const opcaoTres = document.getElementById("q-1-3");
const opcaoQuatro = document.getElementById("q-1-4");

const opcaoDoisUm = document.getElementById("q-2-1");
const opcaoDoisDois = document.getElementById("q-2-2");
const opcaoDoisTres = document.getElementById("q-2-3");
const opcaoDoisQuatro = document.getElementById("q-2-4");

const opcaoTresUm = document.getElementById("q-3-1");
const opcaoTresDois = document.getElementById("q-3-2");
const opcaoTresTres = document.getElementById("q-3-3");
const opcaoTresQuatro = document.getElementById("q-3-4");

const opcaoQuatroUm = document.getElementById("q-4-1");
const opcaoQuatroDois = document.getElementById("q-4-2");
const opcaoQuatroTres = document.getElementById("q-4-3");
const opcaoQuatroQuatro = document.getElementById("q-4-4");

const opcaoCincoUm = document.getElementById("q-5-1");
const opcaoCincoDois = document.getElementById("q-5-2");
const opcaoCincoTres = document.getElementById("q-5-3");
const opcaoCincoQuatro = document.getElementById("q-5-4");

const botaoUm = document.getElementById("b-img-1");
const botaoDois = document.getElementById("b-img-2");
const botaoTres = document.getElementById("b-img-3");
const botaoQuatro = document.getElementById("b-img-4");

const botaoDoisUm = document.getElementById("b-img-5");
const botaoDoisDois = document.getElementById("b-img-6");
const botaoDoisTres = document.getElementById("b-img-7");
const botaoDoisQuatro = document.getElementById("b-img-8");


const numQuestions = 20;
var acertos = 0;

opcaoUm.addEventListener("click", revelaResp);
opcaoDois.addEventListener("click", revelaResp);
opcaoTres.addEventListener("click", revelaResp);
opcaoQuatro.addEventListener("click", revelaResp);

opcaoDoisUm.addEventListener("click", revelaRespDois);
opcaoDoisDois.addEventListener("click", revelaRespDois);
opcaoDoisTres.addEventListener("click", revelaRespDois);
opcaoDoisQuatro.addEventListener("click", revelaRespDois);

opcaoTresUm.addEventListener("click", revelaRespTres);
opcaoTresDois.addEventListener("click", revelaRespTres);
opcaoTresTres.addEventListener("click", revelaRespTres);
opcaoTresQuatro.addEventListener("click", revelaRespTres);

opcaoQuatroUm.addEventListener("click", revelaRespQuatro);
opcaoQuatroDois.addEventListener("click", revelaRespQuatro);
opcaoQuatroTres.addEventListener("click", revelaRespQuatro);
opcaoQuatroQuatro.addEventListener("click", revelaRespQuatro);

opcaoCincoUm.addEventListener("click", revelaRespCinco);
opcaoCincoDois.addEventListener("click", revelaRespCinco);
opcaoCincoTres.addEventListener("click", revelaRespCinco);
opcaoCincoQuatro.addEventListener("click", revelaRespCinco);

botaoUm.addEventListener("click", revelaRespSeis);
botaoDois.addEventListener("click", revelaRespSeis);
botaoTres.addEventListener("click", revelaRespSeis);
botaoQuatro.addEventListener("click", revelaRespSeis);

botaoDoisUm.addEventListener("click", revelaRespSete);
botaoDoisDois.addEventListener("click", revelaRespSete);
botaoDoisTres.addEventListener("click", revelaRespSete);
botaoDoisQuatro.addEventListener("click", revelaRespSete);

function revelaResp() {

    opcaoUm.style.backgroundColor = "red";
    opcaoDois.style.backgroundColor = "red";
    opcaoTres.style.backgroundColor = "red";
    opcaoQuatro.style.backgroundColor = "green";

    opcaoUm.style.color = "white";        
    opcaoDois.style.color = "white";
    opcaoTres.style.color = "white";        
    opcaoQuatro.style.color = "white";

    opcaoUm.disabled = true;
    opcaoDois.disabled = true;
    opcaoTres.disabled = true;
    opcaoQuatro.disabled = true;
}

function revelaRespDois() {

    opcaoDoisUm.style.backgroundColor = "red";
    opcaoDoisDois.style.backgroundColor = "green";
    opcaoDoisTres.style.backgroundColor = "red";
    opcaoDoisQuatro.style.backgroundColor = "red";

    opcaoDoisUm.style.color = "white";        
    opcaoDoisDois.style.color = "white";
    opcaoDoisTres.style.color = "white";        
    opcaoDoisQuatro.style.color = "white";

    opcaoDoisUm.disabled = true;
    opcaoDoisDois.disabled = true;
    opcaoDoisTres.disabled = true;
    opcaoDoisQuatro.disabled = true;
}

function revelaRespTres() {

    opcaoTresUm.style.backgroundColor = "red";
    opcaoTresDois.style.backgroundColor = "green";
    opcaoTresTres.style.backgroundColor = "red";
    opcaoTresQuatro.style.backgroundColor = "red";

    opcaoTresUm.style.color = "white";        
    opcaoTresDois.style.color = "white";
    opcaoTresTres.style.color = "white";        
    opcaoTresQuatro.style.color = "white";

    opcaoTresUm.disabled = true;
    opcaoTresDois.disabled = true;
    opcaoTresTres.disabled = true;
    opcaoTresQuatro.disabled = true;
}

function revelaRespQuatro() {

    opcaoQuatroUm.style.backgroundColor = "red";
    opcaoQuatroDois.style.backgroundColor = "red";
    opcaoQuatroTres.style.backgroundColor = "green";
    opcaoQuatroQuatro.style.backgroundColor = "red";

    opcaoQuatroUm.style.color = "white";        
    opcaoQuatroDois.style.color = "white";
    opcaoQuatroTres.style.color = "white";        
    opcaoQuatroQuatro.style.color = "white";

    opcaoQuatroUm.disabled = true;
    opcaoQuatroDois.disabled = true;
    opcaoQuatroTres.disabled = true;
    opcaoQuatroQuatro.disabled = true;
}

function revelaRespCinco() {

    opcaoCincoUm.style.backgroundColor = "green";
    opcaoCincoDois.style.backgroundColor = "red";
    opcaoCincoTres.style.backgroundColor = "red";
    opcaoCincoQuatro.style.backgroundColor = "red";

    opcaoCincoUm.style.color = "white";        
    opcaoCincoDois.style.color = "white";
    opcaoCincoTres.style.color = "white";        
    opcaoCincoQuatro.style.color = "white";

    opcaoCincoUm.disabled = true;
    opcaoCincoDois.disabled = true;
    opcaoCincoTres.disabled = true;
    opcaoCincoQuatro.disabled = true;
}

function revelaRespSeis() {

    botaoUm.style.borderColor = " green";
    botaoDois.style.borderColor = " red";
    botaoTres.style.borderColor = " red";
    botaoQuatro.style.borderColor = " red";

    botaoUm.disabled = true;
    botaoDois.disabled = true;
    botaoTres.disabled = true;
    botaoQuatro.disabled = true;
}

function revelaRespSete() {

    botaoDoisUm.style.borderColor = " red";
    botaoDoisDois.style.borderColor = " red";
    botaoDoisTres.style.borderColor = " green";
    botaoDoisQuatro.style.borderColor = " red";

    botaoDoisUm.disabled = true;
    botaoDoisDois.disabled = true;
    botaoDoisTres.disabled = true;
    botaoDoisQuatro.disabled = true;
}

startQuiz.addEventListener("click", startGame);

function startGame() {
    containerInicio.classList.add("hide");
    questions.classList.remove("hide");
    enviar.classList.remove("hide");
}

enviar.addEventListener("click", enviaQuestao);

function enviaQuestao() {
    questions.classList.add("hide");
    enviar.classList.add("hide");
    resultado.classList.remove("hide");
    buttonRestart.classList.remove("hide");
    pontuacao.innerHTML = (`You got ${(acertos)} questions right out of ${numQuestions}`);

}

function contagem () {
    acertos1.innerHTML('davi')
}


buttonRestart.addEventListener("click",restartGame);

function restartGame() {
    resultado.classList.add("hide");
    containerInicio.classList.remove("hide");
    acertos = 0;
}




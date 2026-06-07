/* ======================================
   TV BRASILEIRA ANOS 80 SIMULATOR
   PARTE 3 - JAVASCRIPT
====================================== */

let canalAtual = 1;
let modoVHS = false;
let vhsSegundos = 0;

/* ==========================
   CANAIS
========================== */

const canais = {

1: {
nome: "SBT",
logo: "SBT",
programas: [

`📰 JORNAL DA NOITE

Boa noite!

A previsão do tempo
indica céu limpo.

🚗 COMERCIAL RETRÔ

Novo automóvel para toda
a família brasileira.`,

`🍔 COMERCIAL

McDonald's

O sabor que conquista
gerações.`,

`🍔 COMERCIAL

Burger King

Hambúrgueres preparados
na grelha.`,

`🥛 COMERCIAL

Parmalat

Leite para toda família.`,

`🧈 COMERCIAL

Margarina Delícia

Muito sabor no café
da manhã.`
]
},

2: {
nome: "GLOBO",
logo: "GLOBO",
programas: [

`🎵 PROGRAMA MUSICAL

Sucessos da década.

🎤 Apresentador:
Carlos Almeida.`,

`🚗 VOLKSWAGEN

Conheça o novo modelo
da linha 1988.`,

`🚗 FORD

Conforto e desempenho.`,

`🚗 CHEVROLET

Tecnologia para você.`,

`🚗 FIAT

Economia e praticidade.`
]
},

3: {
nome: "BAND",
logo: "BAND",
programas: [

`⚽ FUTEBOL

Campeonato Nacional.

Resultado da rodada.`,

`🏁 AUTOMOBILISMO

Corridas e entrevistas.`,

`🏍 YAMAHA

Liberdade sobre duas rodas.`,

`🏍 HONDA

Confiança e desempenho.`
]
},

4: {
nome: "RECORD",
logo: "RECORD",
programas: [

`🎮 VIDEOGAME SHOW

Dicas de Atari.

Recordes da semana.`,

`🕹 NOVO JOGO

Aprenda estratégias
para vencer.`,

`⛪ PROGRAMA RELIGIOSO

Culto televisivo fictício.

Mensagem de fé,
oração e louvores.`
]
}

};

/* ==========================
   ELEMENTOS
========================== */

const display =
document.getElementById("program-content");

const logo =
document.querySelector(".channel-logo");

const canalInfo =
document.getElementById("channelNumber");

const tela =
document.querySelector(".screen");

/* ==========================
   TROCA DE CANAL
========================== */

function changeChannel(numero){

canalAtual = numero;

if(modoVHS){
return;
}

efeitoChuvisco(() => {

if(numero >= 5){

mostrarSemSinal();

}else{

mostrarCanal();

}

});

}

/* ==========================
   MOSTRAR CANAL
========================== */

function mostrarCanal(){

const canal = canais[canalAtual];

logo.textContent = canal.logo;

const programa =
canal.programas[
Math.floor(
Math.random() *
canal.programas.length
)
];

display.innerHTML = programa;

canalInfo.textContent =
canalAtual;

}

/* ==========================
   SEM SINAL
========================== */

function mostrarSemSinal(){

logo.textContent = "📡";

display.innerHTML =

`SEM SINAL

Canal não disponível

🌙 Canal fora do ar

📻 Ruído eletrônico`;

canalInfo.textContent =
canalAtual;

}

/* ==========================
   CHUVISCO
========================== */

function efeitoChuvisco(callback){

tela.classList.add("static");

display.innerHTML =
"📡 Sintonizando...";

setTimeout(() => {

tela.classList.remove("static");

callback();

},700);

}

/* ==========================
   BOTÕES CANAL
========================== */

document
.getElementById("prevChannel")
.addEventListener("click",()=>{

canalAtual--;

if(canalAtual < 1){
canalAtual = 9;
}

changeChannel(canalAtual);

});

document
.getElementById("nextChannel")
.addEventListener("click",()=>{

canalAtual++;

if(canalAtual > 9){
canalAtual = 1;
}

changeChannel(canalAtual);

});

/* ==========================
   VHS
========================== */

document
.getElementById("vhsMode")
.addEventListener("click",toggleVHS);

function toggleVHS(){

modoVHS = !modoVHS;

efeitoChuvisco(() => {

if(modoVHS){

logo.textContent =
"📼 VHS";

display.innerHTML =

`📼 GRAVAÇÃO DOMÉSTICA

Ano: 1988

▶ Reproduzindo...

Família reunida
na sala de estar.`;

}else{

changeChannel(canalAtual);

}

});

}

/* ==========================
   BOTÕES VHS
========================== */

document
.getElementById("rewBtn")
.addEventListener("click",()=>{

if(!modoVHS) return;

display.innerHTML =

`📼 VHS

⏪ Rebobinando...`;

});

document
.getElementById("playBtn")
.addEventListener("click",()=>{

if(!modoVHS) return;

display.innerHTML =

`📼 VHS

▶ Reproduzindo

Gravação doméstica
de 1988`;

});

document
.getElementById("pauseBtn")
.addEventListener("click",()=>{

if(!modoVHS) return;

display.innerHTML =

`📼 VHS

⏸ Pausado`;

});

document
.getElementById("ffBtn")
.addEventListener("click",()=>{

if(!modoVHS) return;

display.innerHTML =

`📼 VHS

⏩ Avanço rápido`;

});

/* ==========================
   CONTADOR VHS
========================== */

setInterval(()=>{

if(modoVHS){

vhsSegundos++;

let h =
String(Math.floor(vhsSegundos/3600))
.padStart(2,"0");

let m =
String(Math.floor(
(vhsSegundos%3600)/60
)).padStart(2,"0");

let s =
String(vhsSegundos%60)
.padStart(2,"0");

document
.getElementById("vhsCounter")
.textContent =
`${h}:${m}:${s}`;

}

},1000);

/* ==========================
   RELÓGIO
========================== */

setInterval(()=>{

const agora = new Date();

const hora =
String(agora.getHours())
.padStart(2,"0");

const min =
String(agora.getMinutes())
.padStart(2,"0");

const seg =
String(agora.getSeconds())
.padStart(2,"0");

document
.getElementById("clock")
.textContent =
`${hora}:${min}:${seg}`;

},1000);

/* ==========================
   INICIALIZAÇÃO
========================== */

mostrarCanal();

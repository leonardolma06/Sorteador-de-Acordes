var acordesMaiores = new Howl({
src: ['Acordes Maiores.wav'],
  sprite: {
    doMaior: [0, 1895],    
    reMaior: [2000, 1880], 
    miMaior: [4000, 1880], 
    faMaior: [6000, 1880],
    faSMaior: [8000, 1880],
    solMaior: [10000, 1880], 
    laMaior: [12000, 1880], 
    sibMaior: [14000, 1880],
    siMaior: [16000, 1880],
  },
  onplay: () => document.getElementById('status').textContent = 'Tocando!',
  onend:  () => document.getElementById('status').textContent = '',
  onloaderror: (_, err) => document.getElementById('status').textContent = 'Erro: ' + err
});

var acordesMenores = new Howl({
  src: ['Acordes Menores.wav'],
  sprite: {
    doSMenor: [0,     1880],
    reMenor:  [2000,  1880],
    reSMenor: [4000,  1880],
    miMenor:  [6000,  1880],
    faSMenor: [10000,  1880],
    solMenor:  [12000, 1880],
    solSMenor: [14000, 1880],
    laMenor:  [16000, 1880],
    siMenor:  [18000, 1880],
  },
  onplay: () => document.getElementById('status').textContent = 'Tocando!',
  onend:  () => document.getElementById('status').textContent = '',
  onloaderror: (_, err) => document.getElementById('status').textContent = 'Erro: ' + err
});

var acordesDimSete = new Howl({
  src: ['Acordes Diminutos.wav'],
  sprite: {
    siDim:  [0,     1890],
    doSDim: [2000,  1890],
    reSDim: [4000,  1890],
    miDim:  [6000,  1890],
    faSDim: [8000,  1890],
    solSDim: [10000, 1890],
    laSDim: [12000, 1890],
  },
  onplay: () => document.getElementById('status').textContent = 'Tocando!',
  onend:  () => document.getElementById('status').textContent = '',
  onloaderror: (_, err) => document.getElementById('status').textContent = 'Erro: ' + err
});

let idAtual = null;
let stopPlay = null;
let primeiraVez = true;
let totalJogadas = 0;
let totalAcertos = 0;
let totalErros = 0;

function tocar() {
  let acorde = campos[sorteioCampo].acordeDograu[sorteioAcorde];
  idAtual = acorde.howl.play(acorde.som);
  stopPlay.disabled = true;
  stopPlay.style.cursor = "not-allowed";
  acorde.howl.once('end', function() {
    stopPlay.disabled = false;
    stopPlay.style.cursor = "pointer";
  });
}

function parar() {
  let acorde = campos[sorteioCampo].acordeDograu[sorteioAcorde];
  if (idAtual !== null) {
    acorde.howl.stop(idAtual);
    stopPlay.style.cursor = "pointer";
    idAtual = null;
    stopPlay.style.cursor = "pointer";
    stopPlay.disabled = false;
  }
}

class Acordes {
  constructor(nome, som, Howl) {
    this.nome = nome;
    this.som = som;
    this.howl = Howl;
  }
}
// Maiores
const cMaior  = new Acordes('C',   'doMaior',  acordesMaiores)
const dMaior  = new Acordes('D',   'reMaior',  acordesMaiores)
const eMaior  = new Acordes('E',   'miMaior',  acordesMaiores)
const fMaior  = new Acordes('F',   'faMaior',  acordesMaiores)
const gMaior  = new Acordes('G',   'solMaior', acordesMaiores)
const aMaior  = new Acordes('A',   'laMaior',  acordesMaiores)
const bMaior  = new Acordes('B',   'siMaior',  acordesMaiores)
const bbMaior = new Acordes('Bb',  'sibMaior', acordesMaiores)
const fsMaior = new Acordes('F#',  'faSMaior', acordesMaiores)
// Menores
const csMenor = new Acordes('C#m', 'doSMenor', acordesMenores)
const dMenor  = new Acordes('Dm',  'reMenor',  acordesMenores)
const dsMenor = new Acordes('D#m', 'reSMenor', acordesMenores)
const eMenor  = new Acordes('Em',  'miMenor',  acordesMenores)
const fsMenor = new Acordes('F#m', 'faSMenor', acordesMenores)
const gMenor  = new Acordes('Gm',  'solMenor', acordesMenores)
const gsMenor = new Acordes('G#m', 'solSMenor',acordesMenores)
const aMenor  = new Acordes('Am',  'laMenor',  acordesMenores)
const bMenor  = new Acordes('Bm',  'siMenor',  acordesMenores)
// Diminutos
const bDim  = new Acordes('Bdim',  'siDim',  acordesDimSete)
const csDim = new Acordes('C#dim', 'doSDim', acordesDimSete)
const dsDim = new Acordes('D#dim', 'reSDim', acordesDimSete)
const eDim  = new Acordes('Edim',  'miDim',  acordesDimSete)
const fsDim = new Acordes('F#dim', 'faSDim', acordesDimSete)
const gsDim = new Acordes('G#dim', 'solSDim',acordesDimSete)
const asDim = new Acordes('A#dim', 'laSDim', acordesDimSete)

class CampoHarmonico {
  constructor(Graus) {
    this.acordeDograu = Graus;
  }
  exibirAcorde(indice) {
    console.log(this.acordeDograu[indice]);
  }
}

const campHarCMaior = new CampoHarmonico(
  [
    cMaior,
    dMenor,
    eMenor,
    fMaior,
    gMaior,
    aMenor,
    bDim,
  ])

const campHarDMaior = new CampoHarmonico(
  [
    dMaior,
    eMenor,
    fsMenor,
    gMaior,
    aMaior,
    bMenor,
    csDim,
  ])

const campHarEMaior = new CampoHarmonico(
  [
    eMaior,
    fsMenor,
    gsMenor,
    aMaior,
    bMaior,
    csMenor,
    dsDim,
  ])

const campHarFMaior = new CampoHarmonico(
  [
    fMaior,
    gMenor,
    aMenor,
    bbMaior, // Si Bemol
    cMaior,
    dMenor,
    eDim,
  ])

const campHarGMaior = new CampoHarmonico(
  [
    gMaior,
    aMenor,
    bMenor,
    cMaior,
    dMaior,
    eMenor,
    fsDim,
  ])

const campHarAMaior = new CampoHarmonico(
  [
    aMaior,
    bMenor,
    csMenor,
    dMaior,
    eMaior,
    fsMenor,
    gsDim,
  ])

const campHarBMaior = new CampoHarmonico(
  [
    bMaior,
    csMenor,
    dsMenor,
    eMaior,
    fsMaior,
    gsMenor,
    asDim,
  ])

var campos = [
  campHarCMaior,
  campHarDMaior,
  campHarEMaior,
  campHarFMaior,
  campHarGMaior,
  campHarAMaior,
  campHarBMaior
];

const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const option5 = document.getElementById("option5");
const option6 = document.getElementById("option6");
const option7 = document.getElementById("option7");
const option8 = document.getElementById("option8");
const option9 = document.getElementById("option9");
const option10 = document.getElementById("option10");
const option11 = document.getElementById("option11");
const proximaQuestao = document.getElementById("proxima-questao")
const acordeSorteado = document.getElementById("p");
const totaljogadas = document.getElementById("centro-pct");
let textoAcorde = document.getElementById("h2");
let dica = document.getElementById("dica");

let resposta = "";
let opcoes = [];

let sorteioCampo;
let sorteioAcorde;


function randomIndex(index){
  return Math.floor(Math.random()*index);
}

window.onload = function() {
  sorteioCampo = randomIndex(campos.length)
  sorteioAcorde = randomIndex(campos[sorteioCampo].acordeDograu.length)
  criarGrafico(); 
  stopPlay = document.getElementById('PlayStop');
  setQuestion();
  stopPlay.addEventListener("click", tocar);
  option0.addEventListener("click", selectOption);
  option1.addEventListener("click", selectOption);
  option2.addEventListener("click", selectOption);
  option3.addEventListener("click", selectOption);
  option4.addEventListener("click", selectOption);
  option5.addEventListener("click", selectOption);
  option6.addEventListener("click", selectOption);
  option7.addEventListener("click", selectOption);
  option8.addEventListener("click", selectOption);
  option9.addEventListener("click", selectOption);
  option10.addEventListener("click", selectOption);
  option11.addEventListener("click", selectOption);
  proximaQuestao.addEventListener("click", setQuestion);
}


function setQuestion(){
  opcoes = [];
  sorteioCampo = randomIndex(campos.length);
  sorteioAcorde = randomIndex(campos[sorteioCampo].acordeDograu.length);
  

  let acorde = campos[sorteioCampo].acordeDograu[sorteioAcorde];
  textoAcorde.innerText = "Considerando que estamos no campo harmonico de " + campos[sorteioCampo].acordeDograu[0].nome + " qual é o acorde tocado?";
  acordeSorteado.innerText = acorde.nome;
  resposta = acorde.nome;
  opcoes.push(acorde.nome);

    if (primeiraVez) {
    primeiraVez = false;
    stopPlay.innerText = "Start";

  } else {
    tocar();
    stopPlay.innerText = "Tocar Som";
  }

  while (opcoes.length < 12) {
    let campoAleatorio = campos[randomIndex(campos.length)];
    let acordeAleatorio = campoAleatorio.acordeDograu[randomIndex(campoAleatorio.acordeDograu.length)];
    if (!opcoes.includes(acordeAleatorio.nome)) {
      opcoes.push(acordeAleatorio.nome);
    }
  }

  opcoes.sort(() => Math.random() - 0.5)

  for (i = 0; i < 12; i++) {
  document.getElementById("option" + i).innerText = opcoes[i];
  document.getElementById("option" + i).disabled = false;
  document.getElementById("option" + i).classList.remove("certo");
  document.getElementById("option" + i).classList.remove("errado");
  document.getElementById("option" + i).style.backgroundColor = "#DDE0FA";
  }
  proximaQuestao.hidden = true;
  showchord.disabled = true;
  showchord.style.cursor = "not-allowed";
  p.hidden = true;
}

const showchord = document.getElementById("showchord");

function selectOption() {
    option0.disabled = true;
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
    option6.disabled = true;
    option7.disabled = true;
    option8.disabled = true;
    option9.disabled = true;
    option10.disabled = true;
    option11.disabled = true;
    parar();
    totalJogadas++;
    showchord.disabled = false;
      showchord.style.cursor = "pointer";

  if (this.innerText == resposta) {
    this.classList.add("certo");
    totalAcertos++;
  } else {
    this.classList.add("errado");
    totalErros++;
  }
  atualizarGrafico();
  proximaQuestao.hidden = false;
}

function showChord () {
  p.hidden = !p.hidden;
}
function Dica () {
  h2.hidden = !h2.hidden;
}

let donutChart;

function criarGrafico() {
  const ctx = document.getElementById('meuDonut').getContext('2d');
  donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{ data: [1], backgroundColor: ['#85B7EB'], borderWidth: 0 }]
    },
    options: { cutout: '70%', plugins: { legend: { display: false }, tooltip: { enabled: false } } }
  });
}

function atualizarGrafico() {
  const pct = totalJogadas > 0 ? Math.round((totalAcertos / totalJogadas) * 100) : 0;

  if (totalJogadas === 0) {
    donutChart.data.datasets[0].data = [1];
    donutChart.data.datasets[0].backgroundColor = ['#85B7EB'];
    donutChart.options.plugins.tooltip.enabled = false;
    document.getElementById("pct").style.top = "50%";
  } else {
    donutChart.data.datasets[0].data = [totalAcertos, totalErros];
    donutChart.data.datasets[0].backgroundColor = ['#1D9E75', '#E24B4A'];
    donutChart.options.plugins.tooltip.enabled = true;
  }

  donutChart.update();
  document.getElementById('pct').textContent = pct + '%';
  document.getElementById('jogadas').textContent = totalJogadas + ' partidas' ;
}
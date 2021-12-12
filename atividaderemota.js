/* CADASTRO DE EVENTOS */
console.log("Funcionalidade cadastro de eventos");

let evento = ["Show de Rock","Titãs"];
let listaEventos = [[]];
if(listaEventos == "") //Se o primeiro evento for vazio, o apaga
{
    listaEventos.pop();
}

var dt_evento = new Date("January 3, 2022"); //DATA PREVISTA PARA O EVENTO
var dt_atual = new Date(); //DATA ATUAL

if(dt_atual > dt_evento)
{
    console.log("Data inválida! Favor inserir data posterior à atual!");
}
else
{
    evento.push(dt_evento.toLocaleDateString()); //Adiciona a data no formato local dd/mm/aaaa ao evento
    listaEventos.push(evento);
    console.log("Evento cadastrado com sucesso!");
}
console.log("Lista de eventos:");
console.log(listaEventos);

/* CADASTRO DE PARTICIPANTES */
console.log("Funcionalidade de cadastro de participantes");

let participante = ["Sebastião Mundi","07/10/2001"];
let listaParticipantes = [["Marvin Marciano","01/01/1948"],["Mônica Suzuki","14/11/1977"],["Eduardo Camelo","27/02/1978"]];

let dt_nasc = new Date(participante[1]);
var idade = ((dt_atual-dt_nasc)/31557600000); //Converte de milisegundos para anos
//console.log(idade);

if(idade>=18)
{
    if(listaParticipantes.length<100)
    {
        listaParticipantes.push(participante);
        console.log("Participante cadastrado com sucesso!")
    }
    else
    {
        console.log("Não foi possível realizar o cadastro. A limitação de participantes por conta do covid-19 já foi atingida!");
    }
}
else
{   
    console.log("Evento não permitido para menores de idade");
}

console.log("Lista de Participantes:");
console.log(listaParticipantes);
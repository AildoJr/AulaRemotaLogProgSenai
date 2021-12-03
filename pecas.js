var listaDePecas = ["Filtro de Ar","Motor","Amortecedor"];

if (listaDePecas.length < 10)
{
    console.log("É possível cadastrar mais peças");
}
else
{
    console.log("Não tem mais espaço na lista");
}

let peso = 50;
if(peso<100)
{
    console.log("A peça deve pesar no mínimo 100g");
}
else
{
    console.log("A peça possui peso adequado");
}

/*var nome = "José Filho Ribeiro";
var idade = 21;
var idade2 = 10;
var frase = "Brasil ganhou de 7 x 0 da alemanha"

var n1 = 5;
var n2 = 3;
*/
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("ganhou", "perdeu"))
//console.log(frase.toUpperCase()) //tolowerCase - deixa minuscula
//console.log(n1 * n2);

//vetores array

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");  //add mais im item na lista
//lista.pop();  //remove o ultimo item da lista
//console.log(lista.length); //tamanho
//console.log(lista.reverse()); //reverso
///console.log(lista.toString()); //transformar em string
//console.log(lista.join("-")) //escolhe o eparador da lista

//Dicionario
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.cor);
console.log(fruta.nome);

var frutas = [{nome:"maçã", cor:"vermelha"},
{nome:"Uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1].nome);
console.log(frutas[2].cor);
*/

//condicionais
/*
var idade = 15;
if(idade >= 18) {
    console.log("maior de idade!")
}
else {
    console.log("menor de idade!")
}

//comando prompt exibir pergunta para usuario
var idade1 = prompt("Qual é a sua idade?");
*/

//repetições
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}

var count = 0;
for(conut = 0; count <=5; count++) {
    console.log(count);
}


//Data
var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getMinutes());
alert(d.getUTCHours());


//Função
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/

//Manipulando elementos da pagina
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar!"); //inserindo texto no html
} 

function redirecionar(){ //redirecinando para outro site
    window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com/"; //mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemover").innerHTML = "Obrigdo por passar o mouse"
    elemento.innerHTML = "Obrigdo por passar o mouse!" //trocar texto ao passar mouse em cima
}

function voltar(elemento){
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!" // voltar o texto que tava antes... tem duas maneira de fazer essas funções, esta ultilizada colocando this no html e pegando o elemento no js, e a outra é usando o getElementById().innerHTML
}

function load(){
    alert("Página carregada"); //função para avisar que a página carregou
}

function funcaoChange(elemento){
    console.log(elemento.value); //função para capturar o valor das opções escolhidas 
}
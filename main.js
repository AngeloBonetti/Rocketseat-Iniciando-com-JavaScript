/* Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".Para saber o tipo de dado você pode usar o operador `typeof`
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */



/* 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
const mensagem = "Hello World!";

alert(mensagem);


/* 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */
let n1 = 2;
let n2 = 5;
let resultado = n1 + n2;

console.log(resultado)


/* 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".Para saber o tipo de dado você pode usar o operador `typeof` */
let valor = 2;

if(typeof(valor) === "number"){
    console.log("É um número");
}else{
    console.log("Não é um número");
}


/* 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */

let valorString = "3";

if(typeof(valorString) === "string"){
    console.log("É uma string");
}else{
    console.log("Não é uma string");
}


/* 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
 */

let valorBooleano = 7;

const resultadoBooleano = 5 >= valorBooleano ? "É um booleano" : "Não é um booleano";

console.log(resultadoBooleano)


/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

let n3 = 5;
let n4 = 3;

let resultadoSubtracao = n3 - n4;

console.log(resultadoSubtracao);


/* 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */

let n5 = 5;
let n6 = 3;

let resultadoMultiplicacao = n3 * n4;

console.log(resultadoMultiplicacao);


/* 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */

let n7 = 5;
let n8 = 3;

let resultadoDivisao = n3 / n4;

console.log(resultadoDivisao.toFixed(2));


/* 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */

let numero = 2;
let resto = numero % 2;

switch(resto){
    case 0:
        console.log("É um número par")
        break
    case 1:
        console.log("Não é um número par")  
        break
    default:
        console.log("Não é um número!")    
}


/* 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

let numeroI = 7;
let restoI = numeroI % 2;

if(restoI === 1){
    console.log("É um número ímpar")
} else if(restoI === 0){
    console.log("Não é um número ímpar") 
}else{
    console.log("Não é um número!")    
}
        


        

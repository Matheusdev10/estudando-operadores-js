// -------------OPERADOR BINÁRIO--------------

// um exemplo é o +

// let number = 1
// console.log(number + 1)

// -------------OPERADOR UNÁRIO--------------
// Operador unário um exemplo é ++
// let number = 1
// console.log(++number)

// -------------OPERADOR TERNÁRIO--------------
// // let number = 1
// console.log(true ? 'alo' : 'nada');
// é uma expressão de condicional

// -------------------------------------

// // ----------------------NEW-------------------
// new faz a construção de um novo objeto

// let name = new String('Matheus');
// let age = new Number(24);
// // console.log(name, age);

// let date = new Date('10-12-1997');
// console.log(date);

// // ----------------OPERADORES UNÁRIOS-------------------

// const person = {
//   name: 'matheus',
//   age: 24,
// };
// delete person.age;
// console.log(person);

// ------------OPERADORES ARITIMÉTICOS-------------------
// resto da divisão

// let remainder; // resto da divisão
// remainder = 11 % 3;
// console.log(remainder);

// incremento

// let increment = 0;
// console.log(++increment);

//decrement
// let decrement = 0;
// console.log(--decrement);

// exponencial

// console.log(3 ** 3);

// ------------GROUPING OPERATOR-------------------
// let total = 2 + 3 * 5;
//na matematica primeiro vai se resolver a multiplicaçao
// nesse caso posso trocar a ordem de precedencia
// colocando os parenteses, veja:

// let total = (2 + 3) * 5;

// ------------OPERADOR DE COMPARAÇÃO-------------------

// let one = 1;
// let two = 2;

// == igual a

// console.log(two == 1);
// console.log(one == '1');

// != difente de
// console.log(one != two); //true
// console.log(one != 1); // false
// console.log(one != '1'); // false

// === estritamente igual a
// console.log(one === '1'); //false
// console.log(one === 1); // true

// !== estritamente diferente de
// console.log(two !== '2'); //true
// console.log(two !== 2); // false

// ------------OPERADOR DE ATRIBUIÇÃO---------------
// operador de adição
// let x = 1;
// x += 1;

// x += 2 é a mesma coisa que
// x = x+2

//operador de subtração
// x = x - 1;
// x -= 1;

//operador de multiplicação
// x = x * 2;
// x *= 2;

//operador de divisão
// x = x / 2;
// x /= 2;

// resto da divisão
// x = x % 2;
// x %= 2;

// exponencial;
// x = x ** 2;
// x **= 2;
// console.log(x);

// ------------OPERADOR LÓGICO---------------

// 2 valores booleanos, quando verificados
//resultara em verdadeiro ou falso

// let pao = true;
// let queijo = true;

//AND &&
// console.log(pao && queijo);
// so se satisfaz se os dois foram true, se 1 for falso
// já nao serve

// OR ||
// console.log(pao || queijo);
// aceita que tenha apenas 1 dos dois
// so dará falso se não tiver ambos

// NOT !
// console.log(!pao);
// !pao signigica que eu to negando a condição
// exemplo: let pao = true
// console.log(!pao) = falso

// ------------OPERADOR CONDICIONAL TERNÁRIO---------------
// exemplos
// fazendo condicional com AND

// let pao = true;
// let queijo = true;

// const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim';

// pao && queijo ? 'Café top' esse trecho fala que
// se for verdadeiro escreve isso
// : 'Café ruim'; se nao, escreve isso

// console.log(niceBreakfast);

// fazendo condicional com OR ||
// let bolo = true;
// let broa = false;

// const niceBreakfast = bolo || broa ? 'Café top' : 'Café ruim';

// console.log(niceBreakfast);

// let age = 10;
// const canDrive = age >= 18 ? 'can drive' : 'can´t drive';
// console.log(canDrive);

// // ------------OPERADOR DE STRING---------------
// CONCATENANDO USA SINAL DE +
// let alpha = 'alpha';
// alpha += 'bet';
// console.log(alpha);

// ------------FALSY AND TRUTHY---------------
// FALSY
// é um valor considerado false em contextos
// onde um booleano é obrigatório

// false
// 0
// -0
// ""
// null
// undefined
// NaN

// console.log('' ? 'verdadeiro' : 'falso');
// qualquer dos valores acima que eu colocar
// nessa condição dará falso pois eu precisaria
// de um valor que fosse boleano

// TRUTHY
// Quando um valor é considerado true em contextos
// onde um booleano é obrigatório

// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// Infinity
// -Infinity

// console.log('' ? 'verdadeiro' : 'falso');
// qualquer dos valores acima que eu colocar
// nessa condição dará verdadeiro

// ------------PRECEDENCIA DE OPERADORES---------------

// De cima para baixo, do mais importante ao menos importante.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           &&
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %=

// true vale 1
// false vale 0

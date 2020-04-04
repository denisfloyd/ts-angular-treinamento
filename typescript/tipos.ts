let feito : boolean = true;
let numero: number;
let numeros : number[] = [1, 2, 3];
let nome : string = 'Five';

numero = 100;


console.log(feito);
console.log(numero);
console.log(numeros);
console.log(nome);

interface toDO {
    title: string,
    isDone: boolean
}

let items : toDO[] = [];

items.push({
    title: 'Aprendendo TypeScript',
    isDone: true
},
{
    title: 'Aprendendo Angular5',
    isDone: true
});

console.log(items);





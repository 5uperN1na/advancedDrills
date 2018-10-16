//name = 'Paula';
//var name;
//console.log(name);

//expected result: var name will be hoisted first.  the value assigned to the variable will display in the console log.

//name = 'Paula';
//let name;
//console.log(name);

//expected result: since 'let' was used, it will not be hoisted.  result or name will be 'undefined' in console log.


setName();
function setName() {
    var name = 'Paula';
    console.log(name);
}

//expected result: function will be hoisted first, then the function call back, name will display in console log.

//console.log('first step');
//let average = getAvg(100, 100);
//function getAvg(x, y) {
// console.log('second step');
//var result = (x + y) / 2;
//console.log('third step');
//console.log(result);
//console.log('fourth step');

//}


let avg = findAvg(2, 2);
console.log('2', avg);
function findAvg(a, b) {
    console.log('1');
    var answer = (a + b) / 2;
    return answer;
}

//expected result:  hoist function first then call function and store in a global variable


let fruits = [
    'bananas',
    'strawberries',
    'peaches'
];


//let favFruit;
let leastFav = 'orange';

function getFruit() {
    let favFruit = fruits[1];
    console.log(fruits[0]);


    function getFav() {
        console.log(favFruit);
        //let leastFav = 'orange';

    }
    console.log(leastFav);
    getFav();
}

getFruit();


sayHi('Paula');

function sayHi(name) {
    console.log(`Hello, ${name}`);
}








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

console.log('first step');
let average = getAvg(100, 100);
function getAvg(x, y) {
    console.log('second step');
    var result = (x + y) / 2;
    console.log('third step');
    console.log(result);
    console.log('fourth step');

}


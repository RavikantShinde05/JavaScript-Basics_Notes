//here i have created a farenhite to celcius degree converter
// with the help of fat arrow functions.

let toCelcius = (faren)=> {
    return 5/9 * (faren - 32);

}
// here we console the 
console.log(toCelcius(85)); toCelcius;

// here is the same function but it is created with function key word and 
// the consoled output is stored in a variable call "cell".

function toCelcius (faren) {
    return 5/9 * (faren - 32);
    
}

let cell = console.log(toCelcius());


function doubleEachCharacter(str) {
    return str.split('').map(char => char.repeat(2)).join('')
    
}

console.log(doubleEachCharacter('hello'));





let i

function includesElement(array, element) {
    for (i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true
        } 
            
        
    } 
    return false
}

console.log(includesElement([1, 2, 3], 2));
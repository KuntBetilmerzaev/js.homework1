

function findCommonElements(arrayy1, arrayy2) {
    const commonElements = [];

    for (let i = 0; i < arrayy1.length; i++) {
        const element = arrayy1[i];
    
        for (let j = 0; j < arrayy2.length; j++) {
            if (element === arrayy2[j]) {
                commonElements.push(element);
                break;
            }
        }
    }
    
    console.log(commonElements); 
}
    

findCommonElements([1, 2, 3], [2, 3, 4])



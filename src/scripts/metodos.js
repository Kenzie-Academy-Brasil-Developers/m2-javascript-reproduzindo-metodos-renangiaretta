// const arrTeste = [1,2,3]

function recreateMap(array, callback){
    let arrResult = [];
    for(let i = 0; i < array.length; i++){
        showResult.push(callback(array[i]))
    }
    return arrResult;
}


function recreateFilter(array, callback){
    let arrResult = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            arrResult.push(array[i], i)
        }
        return arrResult
    }
}


const testeFilter = arrTeste.filter((arrTeste) => arrTeste[i] === 2)

function recreateReduce(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i]
        }
        return result
    }



function recreateFind (array, callback){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) == true){
            return i;
        }
    }
}


function recreateIncludes(array, callback){
    for(let i = 0; i<array.length; i++){
        if((array[i]) == callback){
            return true;
        }
    }
}

function recreateIndexOf(array, callback) {
    for(let i = 0; i < array.length; i++){
        if((array[i]) == callback){
            return i;
        }
    }
}


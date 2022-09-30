// const arrTeste = [1,2,3]

function recreateMap(array, callbackFunc){
    let arrResult = [];
    for(let i = 0; i < array.length; i++){
        showResult.push(callbackFunc(array[i]))
    }
    return arrResult;
}


function recreateFilter(array, callbackFunc){
    let arrResult = [];
    for(let i = 0; i < array.length; i++){
        if(callbackFunc(array[i])){
            arrResult.push(array[i], i)
        }
    }
    return arrResult;
}


function recreateReduce(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i]
        }
        return result
    }



function recreateFind (array, callbackFunc){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(callbackFunc(array[i])){
            result = array[i];
            break;
        }
    }
    return result;
}


function recreateIncludes(array, callbackFunc){
    for(let i = 0; i<array.length; i++){
        if((array[i]) == callbackFunc){
            return true;
        }
    }
}


function recreateIndexOf(array, callbackFunc) {
    for(let i = 0; i < array.length; i++){
        if((array[i]) == callbackFunc){
            return i;
        }
    }
}


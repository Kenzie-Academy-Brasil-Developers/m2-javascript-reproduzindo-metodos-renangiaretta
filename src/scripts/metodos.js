
const callbackMap = (n => n * 2)
const arrMap = [1,2,3]

function recreateMap(array, callbackFunc){
    let arrResult = [];
    for(let i = 0; i < array.length; i++){
        arrResult.push(callbackFunc(array[i]))
    }
    return arrResult;
}

console.log('TESTANDO FUNÇÃO MAP')
console.log(recreateMap(arrMap, callbackMap))



const ages = [32, 33, 16, 40];

function callbackFilter(age) {
  return age >= 18;
}

function recreateFilter(array, callback) {
    let newArr = []
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log('TESTANDO FUNÇÃO FILTER')
console.log(recreateFilter(ages, callbackFilter))



function callbackFind(age) {
    return age >= 33;
  }
  
  function recreateFind(array, callback) {
      let result = 0;
      for(let i=0; i<array.length; i++){
          if(callback(array[i])){
              result = array[i];
              break;
          }
      }
      return result;
  }
  console.log('TESTANDO FUNÇÃO FIND')
  console.log(recreateFind(ages, callbackFind))



const callbackIndexOf = (value) => {
    for (let i = 0; i<= ages.length; i++){
        if (value == ages[i]){
            return value;
        }
    }
}

function recreateIndexOf(array, callback) {
    for(let i=0; i<array.length; i++){
        if((array[i]) == callback){
            return i;
        }
    }
    return -1
}
console.log('TESTANDO FUNÇÃO INDEXOF')
console.log(recreateIndexOf(ages, callbackIndexOf(32)))
console.log(recreateIndexOf(ages, callbackIndexOf(16)))
console.log(recreateIndexOf(ages, callbackIndexOf(3)))




const callbackIncludes = (value) => {
    for (let i = 0; i<=ages.length; i++){
       if (value == ages[i]){
            return value;
        }
    }
}

function recreateIncludes(array, callback) {
    for(let i=0; i<array.length; i++){
        if(array[i]==callback){
            return true;
        }
    }
return false
}
console.log('TESTANDO FUNÇÃO INCLUDES')
console.log(recreateIncludes(ages, callbackIncludes(32)))
console.log(recreateIncludes(ages, callbackIncludes(40)))
console.log(recreateIncludes(ages, callbackIncludes(50)))



function callbackReduce(acumulator, actualValue) {
    return acumulator + actualValue;
  }
  
  function recreateReduce(array, callback, initialValue = 0) {
    let sum = initialValue
    for(let i = 0; i < array.length; i++){
      sum = callback(sum, array[i])
    }
    return sum
  }
console.log('TESTANDO FUNÇÃO REDUCE')
console.log(recreateReduce(ages, callbackReduce));
console.log(recreateReduce(ages, callbackReduce, 100));
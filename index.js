
//myAlert
const myAlert = (element) => alert(element)

const myEach = function(collection, myAlert) {
    if (Array.isArray(collection) === true) {     
        collection.forEach(element => myAlert(element)) 
    } else {
        const newArray = Object.values(collection)
        newArray.forEach(element => myAlert(element))
    }
    return collection
}

//myMap
const transformArr = (element) => element * 3

const myMap = function(collection, transformArr) {
    let newCollection
    if (Array.isArray(collection) === true) {     
        newCollection = collection.map(element => transformArr(element)) 
    } else {
        const newArray = Object.values(collection)
        newCollection = newArray.map(element => transformArr(element))
    } 
    return newCollection
}


//myReduce
const myReduce = (collection, callback, init = -2) => {
    if (Array.isArray(collection) === true && init === null) {
        return collection.reduce(callback, init)
    } else if (Array.isArray(collection) === true) {
        return collection.reduce(callback, init)
    } else if (Array.isArray(collection) === false && init === null) {
        init = Object.values(collection)[0]
        const newArray = Object.values(collection)
        return newArray.reduce(callback, init)
    } else {
        const newArray = Object.values(collection)
        return newArray.reduce(callback, init)
    }
}

//myFind
const myFind = (collection, predicate) => {
    let targetElement  
    if (Array.isArray(collection) === true) {   
          targetElement = collection.find(num => predicate(num))
      } else {
          const newArray = Object.values(collection)
          targetElement = newArray.find(num => predicate(num))
      } 
    return targetElement
}

//myFilter

const myFilter = (collection, predicate) => {
    let targetElements = []
    if (Array.isArray(collection) === true) {   
        targetElements = collection.filter(num => predicate(num))
    } else {
        const newArray = Object.values(collection)
        targetElements = newArray.filter(num => predicate(num))
    } 
  return targetElements
}

//mySize

const mySize = collection => {
    if (Array.isArray(collection) === true) {   
        return collection.length
    } else {
        const newArray = Object.values(collection)
        return newArray.length
    }
}

//myFirst
const myFirst = (array, n = 1) => {
    if (Array.isArray(array) === true && n === 1) {   
        let firstValues = array.slice(0, n)[0]
        return firstValues
    } else if (Array.isArray(array) === true && n > 1 ) {
        let firstValues = []
        firstValues = array.slice(0, n)
        return firstValues
    } else if (Array.isArray(array) === false && n === 1) {
        const newArray = Object.values(collection)
        let firstValues = newArray.slice(0, n)[0]
        return firstValues
    } else {
        const newArray = Object.values(collection)
        let firstValues = []
        firstValues = newArray.slice(0, n)
        return firstValues
    }    
}

//myLast
const myLast = (collection, n = 1) => {
    if (Array.isArray(collection) === true && n === 1) {
      let lastValues = collection.slice(collection.length - n, collection.length)
      return lastValues[0]
    } else if (Array.isArray(collection) === true && n > 1) {
      let lastValues = []
      lastValues = collection.slice(collection.length - n, collection.length)
      return lastValues
    } else if (Array.isArray(collection) === false && n === 1) {
      const newArray = Object.values(collection)
      let lastValues = newArray.slice(collection.length - n, collection.length)
      return lastValues[0]
    } else {
      const newArray = Object.values(collection)
      let lastValues = []
      lastValues = newArray.slice(collection.length - n, collection.length)
      return lastValues
    }
  }

  //myKeys
const myKeys = obj => {
    const newArray = Object.keys(obj)
    return newArray
}

  //myValues
  const myValues = obj => {
    const newArray = Object.values(obj)
    return newArray
}
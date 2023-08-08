// select element

const result = document.getElementById("result")
const store = document.getElementById("store")
const clear = document.getElementById("clear")
const width = document.getElementById("width")
const breadth = document.getElementById("breadth")
const caculator = document.getElementById("caculator")
const records = document.getElementById("records")

// function
clearResult = () => {
    result.innerText = null
    // console.log("clear result function")
}
calcArea = () => {
    // console.log("calcArea function")
    // calc
    const area = width.valueAsNumber * breadth.valueAsNumber
    result.innerText = (`w:${width.value}ft * b:${breadth.value}ft = area ${area}sqft`)
    // remove
    width.valueAsNumber = breadth.valueAsNumber = null
}
storeResult = () => {
    // console.log("store result function")
    records.innerHTML += `<li>${result.innerText}</li>`
    clearResult()
}


// process
caculator.onclick = calcArea

clear.onclick = clearResult

store.onclick = storeResult
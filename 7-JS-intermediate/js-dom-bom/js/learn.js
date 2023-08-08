// input

// const x = window.prompt()

// window.alert(x)



// area calc (w,b)

// const w = window.prompt("Input Width")
// const b = window.prompt ("Input Breadth")
// area = w * b
// window.alert("Area is" + area + "sqft")



// const run = (x,y) => {
//     window.alert(typeof x)
//     window.alert(typeof y)
//     return parseFloat(x) + parseFloat(y)
// }

// const inputx = window.prompt("X.....")
// const inputy = window.prompt("Y.....")

// window.alert(run(inputx,inputy))



// const answer = window.confirm("ထမင်းစားပြီးပြီလား...")
// window.alert(answer ? "စားပြီးပြီ" : "မစားရသေးဘူး")



// const myName = window.prompt("What is your name")
// console.log(`My name is ${myName}`)




// const h11 = document.getElementsByTagName("h1")[0]
// console.dir(h11)
// console.log(h11.innerText)
// console.log(h11.style)
// console.log(h11.title)



// const showAlert = (event,x,y) => alert(x + y)
// const btn = document.querySelector("#btn")

// btn.onclick = showAlert.bind(null,event,5,6)

// btn.addEventListener("click",showAlert.bind(null,event,1,2))



// const h1 = document.querySelector("h1")

// h1.addEventListener("mouseenter",() => console.log("This is enter"))
// h1.addEventListener("mouseout",() => console.log("This is mouse out"))
// h1.addEventListener("click",e => console.log(e,"This is move"))



// const input = document.querySelector("input")
// // const select = document.querySelector("select")
// input.addEventListener("change",function(){
//     console.log(this)
// })
// input.addEventListener("keydown",() => console.log("This is keydown"))
// input.addEventListener("keypress", () => console.log("This is keypress"))
// input.addEventListener("keyup",() => console.log("This is keyup"))
// input.addEventListener("focus",() => console.log("This is focus"))
// input.addEventListener("blur",() => console.log("This is blur"))
// input.addEventListener("change",(e) => {
//     console.log(e.target)
//     console.log("change event")
// })
// select.addEventListener("change",() => console.log("This is change"))



// const form = document.querySelector("form")

// form.addEventListener("submit",e => {
//     e.preventDefault()
//     console.log(this)
//     console.log("This is submit")
// })



// window.addEventListener("scroll",() => console.log("U scrolling"))
// document.querySelector("#box").addEventListener("scroll",() => console.log("U scrolling in box"))

// window.addEventListener("load",() => console.log("loaded"))
// console.log("hello 1")
// console.log("hello 2")
// console.log("hello 3")



// document.querySelector("a").addEventListener("click",e => {
//     e.preventDefault()
//     console.log(e)
// })




const btn = document.querySelector("#btn")

const showConsole = () => {
    console.log("U clicked")
    btn.removeEventListener("click",showConsole)
}

btn.addEventListener("click",showConsole)
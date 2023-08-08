// const [a,b,...r] = [1,2,3,4,5]
// console.log(a)
// console.log(b)
// console.log(r)


// const {a,b} = {a:"aaa",b:"bbb"}
// console.log(a)
// console.log(b)


// const arr = ["a" , "b" , "c" , "d" , "e"]
// const obj = {brand : "apple" , model : "macbook pro" , spec : {cpu : "i7" , ram : 8 , SSD : "110G"}}
// const j = `["a" , "b" , "c" , "d" , "e"]`
// const j2 = `{"brand" : "apple" , "model" : "macbook pro" , "spec" : {"cpu" : "i7" , "ram" : 8 , "SSD" : "110G"}}`

// // json to js
// // json decode
// console.log(JSON.parse(j)[1])
// console.log(JSON.parse(j2).model)

// // js to json
// // json encode
// console.log(JSON.stringify(obj))
// console.log(JSON.stringify(arr))


// function run(){
//     // const req = new XMLHttpRequest()
//     // //  console.log(req)

//     // req.open("GET" , "https://fakestoreapi.com/products")
//     // req.send()
//     // req.addEventListener("load" , (event) => {
//     //     console.log(event.target.responseText)
//     //     const data = JSON.parse(event.target.responseText)
//     //     console.log(data)
//     // })


//     fetch("https://fakestoreapi.com/products")
//     .then(data => data.json())
//     .then(json => {
//         console.log(json)
//     })
// }


// localStorage.setItem("myName" , "Min Thu Khant")
// localStorage.setItem("myAge" , 17)

// sessionStorage.setItem("nickName" , "Min Lay")

// document.cookie = "name = Min Thu Khant";
// document.cookie = "pc = i7 7th gen without gpu"

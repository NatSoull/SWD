// const a = 5
// const b = "Khant"

// const af = () => {
//     const x = 10
//     const y = 20
//     const z = x + y
//     return "This is af" + z
// }

// function fs() {
//     const j = "jjj"
//     const k = "kkk"
//     return "This is fs" + j + k
// }

// af()
// fs()



// function sync(){
//     console.log("a")
//     for(let i = 1 ; i <= 10 ; i++){
//         console.log(i , "b")
//     }
//     console.log("c")
// }

// sync()

// function asyncFun(){
//     fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/2')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/3')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/4')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/5')
//     .then(res => res.json())
//     .then(console.log);

//     fetch('https://dummyjson.com/products/6')
//     .then(res => res.json())
//     .then(console.log);
// }

// asyncFun()

// function run(){
//     console.log("a")

//     setTimeout(() => {
//         console.log("b")
//     }, 1);

//     let z = 0
//     for (let i = 0 ; i < 9999999 ; i++){
//         z += i
//     }
//     console.log(z)
    

//     console.log("c")
// }

// run()



// const i = "iii"

// console.log("a")
// console.log("b")

// try {
//     // i = "u"
//     console.log(i)
// }catch(e){
//     // console.log(e)
//     console.log(e.message)
// }finally{
//     console.log("final")
// }

// console.log("c")
// console.log("d")



// random number ( number > 5 ? "aung tal" : "kya tal" )

// function run(){
//     const p = new Promise((resolve , reject) => {
//         const num = Math.floor(Math.random() * 10)
//         setTimeout(() => {
//             if(num >= 5){
//                 resolve(num)
//             }else{
//                 reject(num)
//             }
//         },
//         3000)
//     })

//     console.log(p)

//     p.then(data => console.log("Aung tal" , data))
//     p.catch(data => console.log("Kya tal" , data))

//     return p
// }


// const f = fetch("https://dummyjson.com/products/2")

// console.log(f);
// const jsonF = f.then(data => data.json())
// f.catch(data => console.log(data))
// jsonF.then(json => console.log(json))

function run(){
    const product1 = fetch("https://dummyjson.com/products/1")
    const response1 = product1.then(data => data.json())
    response1.then(json => console.log(json))

    const product2 = fetch("https://dummyjson.com/products/2")
    const response2 = product2.then(data => data.json())
    response2.then(json => console.log(json))

    const product3 = fetch("https://dummyjson.com/products/3")
    const response3 = product3.then(data => data.json())
    response3.then(json => console.log(json))

    const product4 = fetch("https://dummyjson.com/products/4")
    const response4 = product4.then(data => data.json())
    response4.then(json => console.log(json))

    const product5 = fetch("https://dummyjson.com/products/5")
    const response5 = product5.then(data => data.json())
    response5.then(json => console.log(json))
}

// run()

async function go(){
    const product1 = await fetch("https://dummyjson.com/products/1")
    const response1 = await product1.json()
    console.log(response1)

    const product2 = await fetch("https://dummyjson.com/products/2")
    const response2 = await product2.json()
    console.log(response2)

    const product3 = await fetch("https://dummyjson.com/products/3")
    const response3 = await product3.json()
    console.log(response3)

    const product4 = await fetch("https://dummyjson.com/products/4")
    const response4 = await product4.json()
    console.log(response4)
}

// go()


const btn = document.querySelector("button")

// openUploader = () => {
//     const openFile = showOpenFilePicker({
//         types: [
//           {
//             description: "Images",
//             accept: {
//               "image/*": [".png", ".gif", ".jpeg", ".jpg"],
//             },
//           },
//         ],
//         excludeAcceptAllOption: true,
//         multiple: false,
//       })
//     console.log(openFile)
//     const file = openFile.then(data => data[0].getFile())
//     file.then(data => console.log(data))

// }

openUploader = async() => {
    const openFile = await showOpenFilePicker({
        types: [
          {
            description: "Images",
            accept: {
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
          },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
      })
    // console.log(openFile)
    const file = await openFile[0].getFile()
    console.log(file)

}



btn.addEventListener("click" , openUploader)
// const arr = ["a" , "b" , "c" , "a" , "d" , "c"]
// const result = []

// for(let i = 0 ; i < arr.length ; i++){
//     if(result.includes(arr[i]) !== arr[i]){
//         result.push(arr[i])
//     }
// }
// // result.push(arr[0])
// console.log(result)

// const arr = ["a" , "b" , "c" , "a" , "d" , "c"]
// const result = [...new Set(arr)]
// console.log(result)



const arr = [1,2,3,4,5]
let result = 0

// arr.forEach(num => result += num)
// console.log(result)

// for(let i = 0 ; i < arr.length ; i++){
//     result += arr[i]
// }
// console.log(result)

result = arr.reduce((pv , cv) => pv + cv,
    0
)
console.log(result)
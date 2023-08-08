// function add (x,y){
//     console.log(arguments)
//     return x + y
// }
// console.log(add(1,2))

// const add2 = function(x,y){
//     return x + y
// }
// console.log(add2(1,2))

// const add3 = (x,y) => x + y
// console.log(add3(1,2))


// console.dir(new Function())



// const add4 = new Function("x","y","return x + y")

// console.log(add4(1,2))



// console.log(add.toString())
// console.log(add(10,20))
// console.log(add.bind(null,10,20).call())



// const obj = {
//     a : "aaa",
//     b : "bbb"
// }
// console.log(obj)
// console.log(obj.toString())
// console.log(obj.toLocaleString())
// console.log(obj.hasOwnProperty("b"))

// console.log(Object.keys(obj))
// console.log(Object.values(obj))



// function run (...x){
//     console.log(x)
//     return "this is run"
// }
// console.log(run(10,20,30,40))

// function sum (x,y,...nums){
//     console.log(x)
//     console.log(y)
//     console.log(nums)
//     return nums.reduce((pv,cv) => pv + cv , 0)
// }
// console.log(sum(1,2,3,4,5,))



// const arr = [10,20,30,40,50,60,70,80]
// // console.log(arr[0])
// // console.log(arr[1])

// const [a,b,c,...x] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(x)



// const obj = {
//     a : "aaa",
//     b : "bbb",
//     c : "ccc"
// }
// // console.log(obj.a)
// // console.log(obj.b)
// // console.log(obj.c)

// const {a,b,c} = obj
// console.log(a)
// console.log(b)
// console.log(c)
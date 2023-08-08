// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.outerWidth)
// console.log(window.outerHeight)


// const exampleModal = new bootstrap.Modal("#exampleModal")
// // user ကအသုံးပြုလာတာ 75% လောက်‌ရောက်ရင် Modal ထိုးပြမယ်

// const h75 = (document.body.getBoundingClientRect().height - window.innerHeight) * 0.75


// window.addEventListener("scroll" , () => {
//     console.log(window.scrollY)
//     if(window.scrollY > h75){
//         exampleModal.show()
//     }
// })


// window.addEventListener("resize" , () => {
//     console.log(window.innerWidth)
//     console.log(window.innerHeight)
// })

// window.addEventListener("online" , () => {
//     console.log("u are online")
// })

// window.addEventListener("offline" , () => {
//     console.log("u are offline")
// })


// alert()
// console.log(innerHeight)
// console.log(innerWidth)


// y = 100;
// x = 200;


const clock = document.querySelector("#clock")
const clockStart = document.querySelector("#clockStart")
const clockStop = document.querySelector("#clockStop")
const to = document.querySelector("#to")

// const run = () => {
//     const d = new Date()
//     // console.log(d.getHours(),":",d.getMinutes(),":",d.getSeconds())

//     // const h1 = document.createElement("h1")
//     // h1.innerText = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
//     // clock.innerHTML = h1
//     clock.innerText = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
// }

// // setTimeout(run , 3000)
// let runClock;

// clockStart.addEventListener("click" , () => {
//     runClock = setInterval(run , 1000)
// })

// clockStop.addEventListener("click" , () => {
//     clearInterval(runClock)
// })


// let run;

// clockStart.addEventListener("click" , () => {
//     run = setTimeout(() => console.log("hello") , 3000)
// })

// clockStop.addEventListener("click" , () => {
//     clearTimeout(run)
// })



 
// function test(start,stop){
//     let i = start;
//     const run = setInterval(() => {
//         console.log("hello", ++i)
//         if(i === stop){
//             clearInterval(run)
//         }
//     } , 1000)
// }

// clockStart.addEventListener("click" , () => {
//     // const windowFeatures = "left=100,top=100,width=320,height=320";
//     // const handle = window.open(
//     //     "https://getbootstrap.com/",
//     //     "mozillaWindow",
//     //     windowFeatures
//     // );

//     // resizeBy(-200 , -200)

//     scrollTo(0 , to.getBoundingClientRect().y)
// })

// clockStop.addEventListener("click" , () => {
//     window.close()
// })


for( i = 1 ; i <= 5 ; i++){
    console.log(i , "loop")
}

console.log(i)
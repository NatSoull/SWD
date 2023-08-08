// const arr = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd']




// console.log(_.chunk(arr , 3))



// const myName = "Min Thu Khant"

// console.log(_.camelCase(myName))



// const m = moment()
// // m.add(45 , "days")
// m.subtract(3 , "years")
// m.subtract(15 , "days")

// console.log(m.format("Y MMM D"))



// axios('https://dummyjson.com/products/1').then(data => console.log(data.data))

// const run = async () => {
//     const res = await axios("https://dummyjson.com/products/1")
//     console.log(res.data)
// }

// run()



// Swal.fire("San Kyi tar" ,
//  "Function to display a SweetAlert2 popup, with an object of options, all being optional. See the SweetAlertOptions interface for the list of accepted fields and values." ,
//  "success"
// )

const btn = document.querySelector("button")

const run = () => {
    // Swal.fire({
    //     icon: "question",
    //     title: "Min Ga Lar Par",
    //     text: "San Kyi tar par byar sheeeesh..."
    // })

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
        }else{
            console.log("No")
        }
      })
}

btn.addEventListener("click" , run)



// const ctx = document.getElementById('myChart');

// new Chart(ctx , {
//   type : "radar",
//   data : {
//     labels : ["a" , "b" , "c" , "d" , "e"],
//     datasets : [
//       {
//         label : "Weekday",
//         data : [5 , 2 , 6 , 1 , 8]
//       },
//       {
//         label : "Weekend",
//         data : [3 , 1 , 2 , 4 , 3]
//       },
//       {
//         label : "frontend",
//         data : [4 , 5 , 4 , 8 , 5]
//       }
//     ]
//   }
// })



const typed = new Typed("#tt" , {
  strings : ["Min Ka Lar Par" , "Nay Koung Lar <br> Hello hello" , "Sar Pee Pe Lar....."],
  typeSpeed : 100,
  backSpeed : 50,
  backDelay : 5000,
  loop : true,
  loopCount : "infinity"
})
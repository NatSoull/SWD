const createBtn = document.querySelector("#createBtn")
const textInput = document.querySelector("#textInput")
const lists = document.querySelector("#lists")
const total = document.querySelector("#total")
const doneTotal = document.querySelector("#doneTotal")


const data = ["Sar pee pe lar","Morning","Good night","read book","Learn JavaScript"]


const counter = () => {
  const totalCount = lists.children.length
  const doneTotalCount = [...lists.children].filter(el => el.querySelector(".form-check-input").checked === true).length
  total.innerText = totalCount
  doneTotal.innerText = doneTotalCount
}


const createLi = (text) => {
    const li = document.createElement("li")
    const forId = "flex" + Math.random()
    // li.addEventListener("dblclick", edit)
    li.className = "list-group-item d-flex align-items-center justify-content-between"
    li.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id=${forId} onchange="done(event)">
    <label class="form-check-label" for=${forId}>
      ${text}
    </label>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary edit-btn"><i class="ri-pencil-fill pe-none"></i></button>
      <button class="btn btn-danger del-btn"><i class="ri-delete-bin-6-line pe-none"></i></button>
    </div>`
  return li
}

// lists.append(createLi("Hello"))
// lists.append(createLi("Nat Soul"))

const addList = () => {
    // const text = textInput.value
    if(textInput.value.trim()){
      lists.append(createLi(textInput.value))
      textInput.value = null
      counter()
    } else {
      alert("Text is empty")
    }
}


createBtn.addEventListener("click",addList)
textInput.addEventListener("keyup", event => {
  if( event.keyCode === 13){
    // console.log(event)
    addList()
  }
})


const del = (event) => {
  if(confirm("Are you sure want to delete")){
    // event.target.parentElement.remove()
    console.log(event.target)
    event.target.closest("li").remove()
    counter()
  }
}


const done = event => {
  event.target.nextElementSibling.classList.toggle("text-decoration-line-through")
  counter()
}


const edit = event => {
  // const old = event.target.querySelector(".form-check-label")
  const old = event.target.closest(".list-group-item").querySelector(".form-check-label")
  const newText = prompt("Enter new name",old.innerText)
  if(newText && newText.trim()){
    old.innerText = newText
  }
}


data.forEach(d => {
  lists.append(createLi(d))
});

// [...lists.children].forEach(li => {
//   li.querySelector(".edit-btn").addEventListener("click",edit)
//   li.querySelector(".del-btn").addEventListener("click",del)
// })

lists.addEventListener("click", event => {
  console.log(event.target)
  if(event.target.classList.contains("del-btn")){
    // if(confirm("Are you sure want to delete")){
    //   // event.target.parentElement.remove()
    //   console.log(event.target)
    //   event.target.closest("li").remove()
    //   counter()
    // }
    del(event)
  }else if(event.target.classList.contains("edit-btn")){
    // // const old = event.target.querySelector(".form-check-label")
    // const old = event.target.closest(".list-group-item").querySelector(".form-check-label")
    // const newText = prompt("Enter new name",old.innerText)
    // if(newText && newText.trim()){
    //   old.innerText = newText
    // }
    edit(event)
  }
})


window.addEventListener("load",counter)
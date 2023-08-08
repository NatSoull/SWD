//variable

const services = [
    {
        id : 1,
        title : "Domain Services",
        price : 15
    },
    {
        id : 2,
        title : "Hosting Services",
        price : 30
    },
    {
        id : 3, 
        title : "Web Design Services",
        price : 150
    },
    {
        id : 4,
        title : "Maintencance Services",
        price : 100
    }
]


//selector

const app = document.querySelector("#app")
const invoiceForm = document.querySelector("#invoiceForm")
const selectServices = document.querySelector("#selectServices")
const quantity = document.querySelector("#quantity")
const lists = document.querySelector("#lists")
const subTotal = document.querySelector("#subTotal")
const tax = document.querySelector("#tax")
const total = document.querySelector("#total")
const listTable = document.querySelector("#listTable")
const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn")
// const addServiceModal = document.querySelector("#addServiceModal")
const closeServiceModalBtn = document.querySelector("#closeServiceModalBtn")
const addServiceModalForm = document.querySelector("#addServiceModalForm")
const menu = document.querySelectorAll(".menu")
const sideBar = document.querySelector("#sideBar")
const addServiceModal = new bootstrap.Modal("#addServiceModal")


//function

const createTr = (service,quantity) => {
    const tr = document.createElement("tr")
    tr.setAttribute("service-id" , service.id)
    tr.classList.add("list")
    const total = service.price * quantity
    tr.innerHTML = `
    <td class="d-flex justify-content-between align-items-center">
        ${service.title}
        <div class="dropdown dropdown-icon">
            <i class="ri-more-2-fill" data-bs-toggle="dropdown"></i>
      
            <ul class="dropdown-menu">
                <li><button class="btn btn-outline-danger dropdown-item del-btn" href="#">Delete</button></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
         
    </td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end">${service.price}</td>
    <td class="text-end list-total">${total}</td>
    `
    return tr
}

const caculateTax = (amount,parcentage = 5) => {
    return amount * (parcentage/100)
}

const findTotal = () => {
    const listTotal = document.querySelectorAll(".list-total")
    let subTotalCaculate = [...document.querySelectorAll(".list-total")].reduce((pv,cv) => pv + parseFloat(cv.innerText),0)
    // listTotal.forEach(el => subTotal += parseFloat(el.innerText))
    // console.log(subTotalCaculate)

    subTotal.innerText = subTotalCaculate
    tax.innerText = caculateTax(subTotalCaculate)
    total.innerText = subTotalCaculate + caculateTax(subTotalCaculate)
}


//processes ( tasks )

services.forEach(({title , id}) => {
    selectServices.append(new Option(title , id))
})

//service option loop


//data collect from form

invoiceForm.addEventListener("submit", event => {
    event.preventDefault()
    // console.log(selectServices.value , selectServices.options[selectServices.selectedIndex].innerText , quantity.valueAsNumber)
    // console.log(
    //     selectServices.value,
    //     quantity.valueAsNumber,
    //     services.find(service => service.id == selectServices.value)
    //     )

        const selectedServices = services.find(({id}) => id == selectServices.value)

        const isExistedService = [...lists.children].find(el => 
            el.getAttribute("service-id") == selectedServices.id
        )

        if(isExistedService){
            console.log("yes,it is existed")
            console.log(isExistedService)
            const existedQuantity = isExistedService.querySelector(".list-quantity")
            existedQuantity.innerText = parseFloat(existedQuantity.innerText) + quantity.valueAsNumber
            isExistedService.querySelector(".list-total").innerText = parseFloat(existedQuantity.innerText) * selectedServices.price
        }else{
            lists.append(createTr(selectedServices , quantity.value))
        }

        findTotal()

    invoiceForm.reset()
    
    showTable()
})


app.addEventListener("click" , event => {
    const currentElement = event.target
    if(currentElement.classList.contains("del-btn")){
        // delete function
        currentElement.closest("tr").remove()
        findTotal()
        showTable()
    }
    console.log(currentElement)
})


const showTable = () => {
    if(lists.children.length){
        listTable.classList.remove("d-none")
    }else{
        listTable.classList.add("d-none")
    }
}


addServiceOpenBtn.addEventListener("dblclick",() => {
    console.log("add Service")
    // idea 1 create elements
    // idea 2 hide / show
    addServiceModal.show()
})


closeServiceModalBtn.addEventListener("click" , () => {
    addServiceModal.hide()
})


addServiceModalForm.addEventListener("submit" , (event) => {
    event.preventDefault()
    console.log("U added")
    console.log(event.target)

    const formData = new FormData(event.target)
    console.log(formData.get("serviceTitle") , formData.get("servicePrice"))

    const id = Date.now()

    // add data
    services.push({
        id,
        title : formData.get("serviceTitle"),
        price : formData.get("servicePrice")
    })

    selectServices.append(new Option(formData.get("serviceTitle") , id))

    // close Modal
    event.target.reset()
    addServiceModal.hide()
})


menu.forEach(el => {
    el.addEventListener("click" , () => 
        sideBar.classList.toggle("active")
    )
})
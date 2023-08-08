const app = document.querySelector("#app")
const productCards = document.querySelector("#productCards")
const productDetailModal = new bootstrap.Modal("#productDetailModal")
const productCategories = document.querySelector("#productCategories")
const searchInput = document.querySelector("#searchInput")
const cart = document.querySelector("#cart")
const header = document.querySelector("#header")



const stars = (no) => {
    let str = ``;
    for(let i = 1 ; i <= 5 ; i++){
        if(Math.floor(no) >= i){
            str += '<i class="ri-star-fill"></i>'
        }else{
            str += '<i class="ri-star-line"></i>'
        }
    }

    return str
}

const excerpt = (str , maxLength = 70) => {
    if(str.length > maxLength){
        return str.substring(0 , maxLength) + "...."
    }
    
    return str
}

const slugToText = (slug) => {
    return slug.replaceAll("-" , " ")
}

const createProductCards = (product) => {
    const div = document.createElement("div")
    div.onclick = () => {
        renderProductDetailModal()
    }
    div.className = "col-12 col-md-6 col-lg-4 product-card"
    div.setAttribute("product-id" , product.id)
    div.innerHTML = `
        <div class="card">
        <div class="card-body">

            
            <h4 class="fw-bold text-truncate">${product.title}</h4>
            <div class="d-flex align-items-center justify-content-between">
                <div class="badge bg-light text-black text-capitalize">
                    ${slugToText(product.category)}
                </div>
                <div class="">
                    ${stars(product.rating)}
                </div>
            </div>
            
            <p class="product-card-description text-black-50 small">
                ${excerpt(product.description)}
            </p>
            <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                <p class="mb-0 price">$ ${product.price}</p>
                
            </div>

        </div>
    </div>
    `
    const img = new Image()
    img.src = product.thumbnail
    img.classList = "product-card-img mb-3"
    div.querySelector(".card-body").prepend(img)

    const btn = document.createElement("button")
    btn.className = "btn btn-outline-dark add-to-cart"
    btn.innerText = "Add to Cart"

    btn.addEventListener("click" , (event) => {
        event.stopPropagation()
        if(event.target.classList.contains("active")){
            btn.classList.remove("active")
            btn.innerText = "Add to Cart"
        }else{
            const img4ani = new Image()
            img4ani.src = product.thumbnail
            // console.log(img.getBoundingClientRect())
            img4ani.style.position = "fixed"
            img4ani.style.left = img.getBoundingClientRect().left + "px"
            img4ani.style.top = img.getBoundingClientRect().top + "px"
            img4ani.style.width = img.getBoundingClientRect().width + "px"
            img4ani.style.height = img.getBoundingClientRect().height + "px"
            document.body.append(img4ani)
            img4ani.style.transition = "0.7s"
            img4ani.style.zIndex = 2000

            setTimeout(() => {
                img4ani.style.top = cart.getBoundingClientRect().top + 15 + "px"
                img4ani.style.left = cart.getBoundingClientRect().left + 30 + "px"
                img4ani.style.width = "0px"
                img4ani.style.height = "0px"
                img4ani.style.transform = "rotate(180deg)"
            } , 100)

            btn.innerText = "Added"
            btn.classList.add("active")
        }
    })

    div.querySelector(".price").after(btn)

    return div
}

const productDetailCarouselItems = (arr) => {
    let slide = ``
    let indicators = ``
    
    arr.forEach((el , index) => {
        
        slide += `
        <div class="carousel-item ${index === 0 && "active"}">
            <img src="${el}" class="d-block w-100 product-detail-img" alt="...">
          </div>
        `

        indicators += `
            <button type="button" data-bs-target="#productDetailCarouselIndicators" data-bs-slide-to="${index}" class="${index === 0 && "active"}" aria-current="true" aria-label="Slide ${index + 1}"></button>
        `
    })

    

    return {slide , indicators}
}

const createCategoriesBtn = (name) => {
    const btn = document.createElement("button")
    btn.className = "btn btn-small btn-outline-dark me-2 text-capitalize cat"
    btn.innerText = slugToText(name)
    btn.setAttribute("cat" , name)
    return btn
}

const renderProductCard = (products) => {
    productCards.innerHTML = null
    products.forEach(product => {
        productCards.append(createProductCards(product))
    })
}

const renderProductDetailModal = () => {
    const currentCard = event.target.closest(".product-card")
        const currentProductID = currentCard.getAttribute("product-id")
        const currentProduct = products.find(product => product.id == currentProductID)
        
        productDetailModal._element.querySelector(".modal-title").innerText = currentProduct.title
        productDetailModal._element.querySelector(".modal-body").innerHTML = `
        <div id="productDetailCarouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
          ${productDetailCarouselItems(currentProduct.images).indicators}
        </div>
        <div class="carousel-inner">
          ${productDetailCarouselItems(currentProduct.images).slide}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productDetailCarouselIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productDetailCarouselIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="d-flex align-items-center justify-content-between mt-3">
        <div class="badge bg-light text-black text-capitalize">
            ${slugToText(currentProduct.category)}
        </div>
        <div class="">
            ${stars(currentProduct.rating)}
        </div>
    </div>

    <p class="mt-3">${currentProduct.description}</p>

    <p>$ ${currentProduct.price}</p>
        `
        
        
        productDetailModal.show()
}

const renderProductCardByCategory = () => {
    const currentCategory = event.target.getAttribute("cat")
   if(currentCategory === "all"){
    renderProductCard(products)
   }else{
    renderProductCard(products.filter(product => 
        product.category === currentCategory
    ))
   }

   // remove old "active"
   productCategories.querySelector(".active").classList.remove("active")

   // add new "active"
   event.target.classList.add("active")
}

const renderBySearch = (keyword) => {
    renderProductCard(products.filter(product => {
        return (
            product.title.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) != -1 ||
            product.description.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) != -1
        )
    }))
}



// process

renderProductCard(products)

categories.forEach(category => 
    productCategories.append(createCategoriesBtn(category))
)

// app.addEventListener("click" , (event) => {
//     if(event.target.closest(".product-card") && !event.target.classList.contains("add-to-cart")){
//         renderProductDetailModal()
//     }

//     if(event.target.classList.contains("cat")){
//         renderProductCardByCategory()
//     }

//     if(event.target.classList.contains("add-to-cart")){
//         console.log("add to cart")
//     }
// })

searchInput.addEventListener("keyup" , (event) => {
    renderBySearch(searchInput.value)
})

window.addEventListener("scroll" , () => {
    if(window.scrollY > 100){
        header.classList.add("sticky-top")
    }else{
        header.classList.remove("sticky-top")
    }
})
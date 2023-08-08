// // import React from "react";

// // const App = () => {
// //   return(
// //     <div>Hello React</div>
// //   )
// // }

// // export default App

// import React from "react";
// import "./App.css";

// const App = () => {
//   const name = "Min Thut Khant";
//   const arr = ["one", "two", "three", "four"];
//   const info = () => {
//     console.log("function par");
//   };

//   return (
//     // <>
//     //   <button onClick={info}>Click function</button>
//     //   <h1>Hello React {name}</h1>
//     //   <h1>{!false ? "true par" : "false par"}</h1>
//     //   <h1>{true && "hey"}</h1>
//     //   <ul>
//     //     {/* {arr.map(item => {
//     //       return <li>{item}</li>
//     //     })} */}

//     //     {arr.map((item) => (
//     //       <>
//     //         <li>{item}</li> <p>hey</p>
//     //       </>
//     //     ))}
//     //   </ul>
//     // </>

//     // <>

//     //   <h1 style={{color: "red" , backgroundColor: "gray"}}>React</h1>
//     //   <h2 className="heading">hello</h2>
//     //   <label htmlFor=""></label>

//     // </>

//     <div>
//       {arr.map((item , i) => (
//         <div className="card" key={i}>
//           <img
//             src="https://i.pinimg.com/236x/b3/d1/9f/b3d19ffca17918eec74222da104cee3d.jpg"
//             alt=""
//             width="200px"
//           />
//           <h1 className="heading">Card Title</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Exercitationem ullam tempora velit saepe? Voluptatum voluptates
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import "./style.css"
// import Home from "./home";

// const App = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: { rate: 3.9, count: 120 },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: { rate: 4.1, count: 259 },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: { rate: 4.7, count: 500 },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       rating: { rate: 2.1, count: 430 },
//     },
//     {
//       id: 5,
//       title:
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//       price: 695,
//       description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 4.6, count: 400 },
//     },
//     {
//       id: 6,
//       title: "Solid Gold Petite Micropave ",
//       price: 168,
//       description:
//         "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 3.9, count: 70 },
//     },
//     {
//       id: 7,
//       title: "White Gold Plated Princess",
//       price: 9.99,
//       description:
//         "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 3, count: 400 },
//     },
//     {
//       id: 8,
//       title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//       price: 10.99,
//       description:
//         "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//       category: "jewelery",
//       image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       rating: { rate: 1.9, count: 100 },
//     },
//     {
//       id: 9,
//       title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//       price: 64,
//       description:
//         "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//       rating: { rate: 3.3, count: 203 },
//     },
//     {
//       id: 10,
//       title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//       price: 109,
//       description:
//         "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//       rating: { rate: 2.9, count: 470 },
//     },
//     {
//       id: 11,
//       title:
//         "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//       price: 109,
//       description:
//         "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//       rating: { rate: 4.8, count: 319 },
//     },
//     {
//       id: 12,
//       title:
//         "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//       price: 114,
//       description:
//         "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//       rating: { rate: 4.8, count: 400 },
//     },
//     {
//       id: 13,
//       title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//       price: 599,
//       description:
//         "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//       rating: { rate: 2.9, count: 250 },
//     },
//     {
//       id: 14,
//       title:
//         "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//       price: 999.99,
//       description:
//         "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//       category: "electronics",
//       image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//       rating: { rate: 2.2, count: 140 },
//     },
//     {
//       id: 15,
//       title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//       price: 56.99,
//       description:
//         "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//       rating: { rate: 2.6, count: 235 },
//     },
//     {
//       id: 16,
//       title:
//         "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//       price: 29.95,
//       description:
//         "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//       rating: { rate: 2.9, count: 340 },
//     },
//     {
//       id: 17,
//       title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//       price: 39.99,
//       description:
//         "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//       rating: { rate: 3.8, count: 679 },
//     },
//     {
//       id: 18,
//       title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//       price: 9.85,
//       description:
//         "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//       rating: { rate: 4.7, count: 130 },
//     },
//     {
//       id: 19,
//       title: "Opna Women's Short Sleeve Moisture",
//       price: 7.95,
//       description:
//         "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//       rating: { rate: 4.5, count: 146 },
//     },
//     {
//       id: 20,
//       title: "DANVOUY Womens T Shirt Casual Cotton Short",
//       price: 12.99,
//       description:
//         "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//       category: "women's clothing",
//       image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//       rating: { rate: 3.6, count: 145 },
//     },
//   ];

//   const obj = {
//     name: "Min Thut Khant",
//     age: 16,
//     gender: "male"
//   }

//   return (<div>
//     {/* {products.map(product => <h3 className="text-primary" key={product.id}>{product.title}</h3>)} */}
//     <h1>Hello</h1>
//     <Home info={obj}/>
//   </div>);
// };

// export default App;

// import React from 'react'
// import Products from './components/Products'
// import './style.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className='container'>
//       <Navbar/>
//       <Products/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// import {useState} from 'react'
// import "./style.css"

// const App = () => {

// const [check , setCheck] = useState("Hello")

// const [count , setCount] = useState(0)

// const increment = () => {
//   setCount(count + 1)
// }
// const decrement = () => {
//   setCount(count - 1)
// }
// const reset = () => {
//   setCount(0)
// }

//   const [check , setCheck] = useState(true)

//   return (
//     <div className=' container'>

//       {/* <h1>
//         {check}
//       </h1>
//       <button onClick={() => {
//         setCheck("Hi")
//       }}>click</button> */}

//       {/* <h1>
//         {count}
//       </h1>

//       <button onClick={increment}>increment</button>

//       <button onClick={decrement}>decrement</button>

//       <button onClick={reset}>reset</button> */}

//       <h1>{check ? "Hello" : "Hi"}</h1>
//       <button onClick={() => {setCheck(!check)}}>Toggle</button>

//     </div>
//   )
// }

// export default App

// import {useState} from 'react'
// import "./style.css"

// const App = () => {

//   const [items , setItems] = useState([
//     {
//       id: 1,
//       name: "Mg Mg",

//     },
//     {
//       id: 2,
//       name: "Su Su",

//     },
//     {
//       id: 3,
//       name: "Kyaw Kyaw",

//     },
//     {
//       id: 4,
//       name: "Kaung Kaung",

//     },
//   ])
//   const [addItems , setAddItems] = useState('')

//   return (
//     <div>
//       <form action="">
//         <input value={addItems} onChange={e => setAddItems(e.target.value)} type="text" placeholder='text your name....' />
//         <p>{addItems}</p>
//       </form>

//       <ul>
//         {items.map(item => {
//           return <li key={item.id}>{item.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App

// import React , {useState} from 'react'
// import "./style.css"

// const App = () => {

//   const [count , setCount] = useState(0)
//   const [name , setName] = useState(true)
//   const [img , setImg] = useState(true)
//   const [lineThrough , setLineTrough] = useState(true)

//   const decrement = () => {
//     if(count > 0){
//       setCount(count - 1)
//     }
//   }

//   return (
//     <div>
//       <img src={img ? "https://i.pinimg.com/236x/de/e1/81/dee1812d0411517ac0a7a46b962dbe9b.jpg" : "https://i.pinimg.com/236x/0f/65/54/0f6554f830af4de950b5fbb53c4659b3.jpg"} style={{height: "300px" , width: "200px" , objectFit: "contain"}} alt="" />
//       <button onClick={() => setImg(!img)}>Change Image</button>

//       <h1>{name ? "LOL" : "Sheeesh......"}</h1>
//       <button onClick={() => setName(!name)}>Toggle button</button>

//       <h1>Count - {count}</h1>
//       <button onClick={decrement} className='btn btn-danger'>-</button>
//       <button onClick={() => setCount(0)} className='btn btn-secondary'>reset</button>
//       <button onClick={() => setCount(count + 1)} className='btn btn-primary'>+</button>

//       <h1 className={lineThrough && "text-decoration-line-through"}>Line Through</h1>
//       <button onClick={() => setLineTrough(!lineThrough)}>line toggle</button>
//     </div>
//   )
// }

// export default App

// import React , {useState} from 'react'
// import "./style.css"

// const App = () => {

//   // const [inputText , setInputText] = useState("")
//   // console.log(inputText)
//   const [name , setName] = useState("")
//   const [password , setPassword] = useState("")
//   const [lists , setLists] = useState([
//     {id: 1 , name: "Jogh" , password: "hoowjfods"},
//     {id: 2 , name: "Mae Lone" , password: "dsfdsfwfds"},
//     {id: 3 , name: "Smirt" , password: "ljsfowekoefwi"},
//   ])

//   const submitHandler = e => {
//     e.preventDefault()
//     console.log(name , password)
//     const newList = {id: Date.now() , name , password}
//     setLists([...lists , newList])
//   }

//   return (
//     <div className='container'>
//       <form action="" onSubmit={submitHandler}>
//         <div className=" form-group">
//           <label htmlFor="" className='form-label'>Name</label>
//           <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder='name' />
//         </div>
//         <div className=" form-group">
//           <label htmlFor="" className='form-label'>Password</label>
//           <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder='password' />
//         </div>
//         <button type='submit' className="btn btn-primary">Submit</button>
//       </form>

//       <ul>
//         {lists.map(list => (<li key={list.id}>{list.name}</li>))}
//       </ul>
//     </div>
//   )
// }

// export default App



// import React, { useState } from "react";
// import "./style.css";
// import Navbar from "./components/Navbar";
// import Products from "./components/Products";
// import Footer from "./components/Footer";
// import CreateNewCart from "./components/CreateNewCart";              ////////////unfinished homework///////////////

// const App = () => {
//   return (
//     <div className="container">
//       <Navbar />
//       <CreateNewCart />
//       <Products />
//       <Footer />
//     </div>
//   );
// };

// export default App;



// import React , {useEffect , useState} from 'react'
// import "./style.css"

// const App = () => {

//   // useEffect(() => {} ,)
//   // useEffect(() => {} , [])
//   // useEffect(() => {} , [text])

//   const [items , setItems] = useState([])

//   useEffect(() => {
//     fetchItem()
//   } , [])


//   const fetchItem = async () => {
//     const api = await fetch("https://fakestoreapi.com/products")
//     const data = await api.json()
//     console.log(data)
//     setItems(data)
//   }



//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App



// import React , {useState , useEffect} from 'react'
// import Cards from './Cards'

// const App = () => {

//   const [items , setItems] = useState()

//   useEffect(() => {fetchData()} , [])

//   const fetchData = async () => {
//     const api = await fetch("https://fakestoreapi.com/products")
//     const data = await api.json()
//     setItems(data)
//     console.log(data)
//   }

//   return (
//     <Cards items={items} />
//   )
// }

// export default App



import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Content from "./pages/Content"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/content' element={<Content/>}/>
      </Routes>
    </div>
  )
}

export default App




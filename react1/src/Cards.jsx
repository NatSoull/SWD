import React from 'react'

const Cards = ({items}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img width="200px" src={item.image} alt="" />
          <p>{item.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Cards

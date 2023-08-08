import React from "react";

const Cards = ({product}) => {

    const [toggleBtn , setToggleBtn] = React.useState(false)

  return (
    <div>
        
          <div className="card p-4" style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={product.image} height="100px" alt="" />

              <h5 className="card-title text-truncate text-primary">
                {product.title}
              </h5>
              <p className="text-truncate small">{product.description}</p>
            </div>
            <button onClick={() => setToggleBtn(!toggleBtn)} className={`btn ${toggleBtn ? 'btn-danger' : 'btn-primary'}`}>{toggleBtn ? "Remove from Cart" : "Add to Cart"}</button>
          </div>
        
    </div>
  );
};

export default Cards;

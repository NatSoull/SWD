/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate() 

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setIsLoading(false);
  };

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  const searchHandler = e => {
    e.preventDefault()
    navigate("/search" , {state:{filterProducts}})
    // console.log(filterProducts)
  }

  return (
    <div>
      <div className=" flex justify-around p-6 shadow-lg">
        <Link to={"/"}>
          <h2 className=" text-2xl text-purple-800 hover:text-purple-500">
            Comfity
          </h2>
        </Link>
        <div className=" flex gap-5">
          <form onSubmit={searchHandler}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              variant="filled"
              placeholder="Search..."
              radius="md"
            />
          </form>
          <Link to={"/addtocart"}>
            <div className=" relative">
              <BiSolidShoppingBagAlt className=" text-3xl text-purple-800" />
              <Badge className=" absolute bottom-6 left-5" color="violet">
                {cartItems.length}
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

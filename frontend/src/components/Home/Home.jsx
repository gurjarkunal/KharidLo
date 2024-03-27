import React from "react";
import { TfiMouse } from "react-icons/tfi";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layouts/MetaData";

const product = {
  name: "Blue shirt",
  images: [
    { url: "https://m.media-amazon.com/images/I/715m9UmFzdL._SY879_.jpg" },
  ],
  price: "₹300",
  _id: "kunal",
};

function Home() {
  return (
    <>
    <MetaData title="KharidLo"/>
      <div className="banner">
        <p>WelCome to Kharidlo</p>
        <h1>FIND AMAZING PRODUCTS BELOW </h1>
        <a href="#container">
          <button>
            Scroll <TfiMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
}

export default Home;

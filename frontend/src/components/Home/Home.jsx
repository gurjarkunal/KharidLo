import React, { useEffect } from "react";
import { TfiMouse } from "react-icons/tfi";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layouts/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <MetaData title="KharidLo" />
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
        {products &&
          products.map((products, key) =>{
            // console.log(products);
            return(
              <Product key={key} products={products} />
            )
          })}
      </div>
    </>
  );
}

export default Home;

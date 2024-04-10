import React, { Fragment, useEffect } from "react";
import { TfiMouse } from "react-icons/tfi";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layouts/MetaData";
import { getProduct, getProductDetails } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/Loader/Loader";
import { useAlert } from "react-alert";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
    dispatch(getProductDetails());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
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
              products.map((products, key) => {
                // console.log(products);
                return <Product key={key} products={products} />;
              })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;

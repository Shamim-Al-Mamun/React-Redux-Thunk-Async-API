import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "./redux/products/productsAction";
import { clearProductDetails } from "./redux/productsDetails/productsDetailsAction";

function ProductsContainer() {
  const dispatch = useDispatch();
  const ProductStatus = useSelector((state) => state.product);
  const { products, loading, error } = ProductStatus;

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(clearProductDetails());
  }, []);

  const ProductsList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return loading ? (
    <div className="loader">
      <BeatLoader color="black" margin={10} loading={loading} size={15} />
    </div>
  ) : error ? (
    <div className="error">{error}</div>
  ) : (
    <div className="ui grid container">{ProductsList}</div>
  );
}

export default ProductsContainer;

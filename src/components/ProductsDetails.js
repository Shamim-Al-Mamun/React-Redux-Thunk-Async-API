import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductDetails } from "./redux/productsDetails/productsDetailsAction";
import { clearProductList } from "./redux/products/productsAction";

function ProductsDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const ProductsDetailsStatus = useSelector((state) => state.productDetails);
  const { productDetails, loading, error } = ProductsDetailsStatus;
  const { image, title, price, category, description } = productDetails;

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
    dispatch(clearProductList());
  }, []);

  return (
    <div className="ui grid container">
      {loading ? (
        <div className="loader">
          <BeatLoader color="black" margin={10} loading={loading} size={15} />
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductsDetails;

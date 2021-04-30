import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDealers, getProducts } from "redux-modules/catalog/selectors";
import { fetchProductsThunk } from "redux-modules/catalog/actions";
import { Product } from "./product";
import { StyledCatalog } from "./styled-components";

export const Catalog = () => {
  const dealers = useSelector(getDealers);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dealers) {
      dispatch(fetchProductsThunk(dealers));
    }
  }, [dealers]);

  return (
    <div>
      <nav>
        <Link to="/cart">Cart</Link>
      </nav>
      <StyledCatalog>
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </StyledCatalog>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDealers, getProductsWithCartInfo } from "modules/catalog/selectors";
import { fetchProductsThunk } from "modules/catalog/actions";
import { Product } from "./product";
import { StyledCatalog } from "./styled-components";

export const Catalog = () => {
  const dealers = useSelector(getDealers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dealers) {
      dispatch(fetchProductsThunk(dealers));
    }
  }, [dealers]);

  const products = useSelector(getProductsWithCartInfo);

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

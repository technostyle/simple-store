import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDealers, getProductsWithCartInfo } from "modules/catalog/selectors";
import { getUniqueProductsInCart } from "modules/cart/selectors";
import { fetchProductsThunk } from "modules/catalog/actions";
import { ProductComponent } from "./product";
import { StyledCatalog } from "./styled-components";
import { Badge } from "components/atoms/badge";
import { NavPanel } from "components/molecules/nav-panel";
import { StyledHeader } from "../../components/molecules/header";

export const Catalog = () => {
  const dealers = useSelector(getDealers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dealers) {
      dispatch(fetchProductsThunk(dealers));
    }
  }, [dealers]);

  const products = useSelector(getProductsWithCartInfo);
  const uniqueProductsInCart = useSelector(getUniqueProductsInCart);

  return (
    <div>
      <StyledHeader>
        <h1>Products</h1>
        <NavPanel>
          <Link to="/cart">Cart</Link>
          <Badge>{uniqueProductsInCart}</Badge>
        </NavPanel>
      </StyledHeader>
      <StyledCatalog>
        {products.map((product: any, idx: number) => (
          <ProductComponent key={idx} product={product} />
        ))}
      </StyledCatalog>
    </div>
  );
};

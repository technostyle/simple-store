import { ProductsProviderClass } from "api-provider/products";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_DEALERS = "SET_DEALERS";

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

const setDealers = (delaers) => ({
  type: SET_DEALERS,
  payload: delaers,
});

export const initializeCatalogThunk = (dealers) => async (
  dispatch,
  getState
) => {
  // console.log({dealers})
  dispatch(setDealers(dealers));
  // const productsProvider = new ProductsProviderClass(dispatch, getState);
  // const dealers = await productsProvider.fetchDealers(dealersUrl);
  // console.log(dealers, dealersUrl)
};

export const fetchProductsThunk = (dealers) => async (dispatch, getState) => {
  const productsProvider = new ProductsProviderClass(dispatch, getState);
  // console.log({ dealers });
  const products = await productsProvider.fetchProducts(dealers);
  dispatch(setProducts(products));
  // console.log(products, dispatch, getState);
};

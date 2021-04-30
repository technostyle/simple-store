import { createSelector } from "reselect";

const catalogSelector = (state) => state.catalog;

export const getProducts = createSelector(
  catalogSelector,
  (catalog) => catalog?.products || []
);

export const getDealers = createSelector(
  catalogSelector,
  (catalog) => catalog.dealers
);

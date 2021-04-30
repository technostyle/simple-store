import { httpService } from "../http/http-service";

const PRODUTS_URL = `https://murmuring-tor-81614.herokuapp.com/api/goods`;

export class ProductsProviderClass {
  store = null;
  //   httpService = null;
  constructor(dispatch, getState) {
    // this.httpService = httpService;
    this.store = { dispatch, getState };
  }

  fetchDealers = async (dealersUrl) => {
    try {
      return await httpService.get(dealersUrl);
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  fetchProducts = async (dealers) => {
    if (!dealers) return [];
    try {
      const products = await httpService.get(PRODUTS_URL, { dealers: dealers });
      return products;
      //   this.store.dispatch()
    } catch (e) {
      console.error(e);
    }
  };
  //   fetchProducts = async (dealers) => {
  //       retur
  //   };
}

// export const productsProvider = new ProductsProviderClass(httpService);

import { httpService } from "http/http-service";
import { PRODUTS_URL } from "api/constants";

export class ProductsProviderClass {
  fetchDealers = async (dealersUrl: string) => {
    try {
      return await httpService.get(dealersUrl);
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  fetchProducts = async (dealers: Array<string>) => {
    if (!dealers) return [];
    try {
      const products = await httpService.get(PRODUTS_URL, { dealers });
      return products;
    } catch (e) {
      console.error(e);
    }
  };
}

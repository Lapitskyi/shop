var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { api } from "@/service/apiService.js";
import { Endpoints } from "@/service/endpoints.js";
export const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield api.get(Endpoints.products.products)
        .then((r) => r)
        .catch((e) => console.log(e));
});
export const getProductsCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield api.get(Endpoints.products.category)
        .then((r) => r)
        .catch((e) => console.log(e));
});

import {api} from "@/service/apiService.js";
import {Endpoints} from "@/service/endpoints.js";


type Product = {
    category: string,
    description: string,
    id: number,
    title: string,
    price: number,
    image: string,
    rating: {
        rate: number,
        count: number
    }

}

export const getProducts = async () => {
    return await api.get<Product[]>(Endpoints.products.products)
        .then((r) => r)
        .catch((e) => console.log(e))
}

export const getProductsCategory = async () => {
    return await api.get<string[]>(Endpoints.products.category)
        .then((r) => r)
        .catch((e) => console.log(e))
}
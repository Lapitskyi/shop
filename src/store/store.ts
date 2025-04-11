import { reactive } from "vue";

type Product = {
    category: string,
    description: string,
    id: number,
    title: string,
    price: number,
    image: string,
    quantity: number
    rating: {
        rate: number,
        count: number
    }
}

export interface Store {
    state: {
        cart: Product[];
    };
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}


export const useStore = (): Store => {
    const state = reactive({
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    });

    const saveCartToLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    };

    const addToCart = (product:Product) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (!existingProduct) {
            state.cart.push(product);
        }
        saveCartToLocalStorage();
    };

    const removeFromCart = (productId:number) => {
        state.cart = state.cart.filter(item => item.id !== productId);
        saveCartToLocalStorage();
    };

    return {
        state,
        addToCart,
        removeFromCart,
    };
};

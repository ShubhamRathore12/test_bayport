import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  items: { id: number; name: string; baseImage: string }[];
  design: string | null;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const currentCart = get().cart;
        set({ cart: [...currentCart, item] });
        console.log("Item added to cart", item);
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;

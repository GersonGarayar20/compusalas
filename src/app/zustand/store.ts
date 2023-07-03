import { create } from "zustand";
import {ProductInterface} from '../types/product';

export interface CartProduct extends ProductInterface {
  quantity: number
}

interface ShoppingCartState {
  items: CartProduct[];
  addItem: (product: CartProduct, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void; // Nueva acción para actualizar la cantidad
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useShoppingCartStore = create<ShoppingCartState>((set) => ({
  items: [],

  addItem: (product, quantity) => {
    set((state) => {
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity = quantity } : item
          ),
        };
      } else {
        return {
          items: [...state.items, {...product, quantity}],
        };
      }
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item._id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item._id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalPrice: () => {
    const items:CartProduct[] = useShoppingCartStore.getState().items;
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0);
    return +total.toFixed(2)
  },

}));

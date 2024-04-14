import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type Variable = {
  totalAmount: number;
  cartItems: Array<any>;
  AddProduit: (produit: any) => void;
  CalculePrixTotale: () => void;
  deleteItem: (id: number) => void;
};
export const useCartStore = create<Variable>()(
  immer(
    persist(
      (set) => ({
        totalAmount: 0,
        cartItems: [],
        AddProduit: (newproduit) =>
          set((state) => {
            const existingItem = state.cartItems.find(
              (item) => item.id === newproduit.id
            );
            
            if (!existingItem) {
              return {
                cartItems: [
                  ...state.cartItems,
                  {
                    id: newproduit.id,
                    Nom: newproduit.Nom,
                    prix: newproduit.prix,
                    quantity: 1,
                    totalPrice: newproduit.prix,
                  },
                ],
              };
            } else {
              existingItem.quantity++;
              existingItem.totalPrice =
                Number(existingItem.totalPrice) + Number(newproduit.prix);
            }
          }),
        CalculePrixTotale: () =>
          set((state) => {
            state.totalAmount = state.cartItems.reduce(
              (total, item) =>
                total + Number(item.prix) * Number(item.quantity),

              0
            );
          }),
        deleteItem: (id) =>
          set((state) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
            
          }),
      }),
      {
        name: "cart Zustand",
      }
    )
  )
);

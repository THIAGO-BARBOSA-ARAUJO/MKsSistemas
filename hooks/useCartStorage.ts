import { ProductCartType } from "@/types";
import { create } from "zustand";

interface OpenCloseCardType {
    isOpen: boolean,
    handleClose: () => void,
    handleOpen: () => void
}

type CartStorage = {
    cart: ProductCartType[],
    total: number,
    addToCart: (item: ProductCartType) => void,
    removeFromCart: (item: ProductCartType) => void
}

export const useOpenCloseCartStorage = create<OpenCloseCardType>((set) => ({
    isOpen: false,
    handleClose: () => set({isOpen: false}),
    handleOpen: () => set({isOpen: true})
}))


export const useCartStorage = create<CartStorage>((set) => {
    return {
        cart: [],
        total: 0,
        addToCart: (item) => set((state) => {
            return (
                state.total += Number(item.price),
                { cart: [...state.cart, item]}
            )
        }),
        removeFromCart: (itemIput) => set((state) => {
            return (
                state.total -= Number(itemIput.price),
                { cart: state.cart.filter((item) => item.id != itemIput.id)}
            )
        })
    }
})

import { ProductCartType } from "@/types";
import { toast } from 'react-toastify';
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
    removeFromCart: (item: ProductCartType) => void,
    someTotal: (item: ProductCartType) => void
    subTractTotal: (item: ProductCartType, qtd: number) => void
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
        qtd: 1,
        addToCart: (item) => set((state) => {
           const exist = state.cart.find((finItem) => item.id == finItem.id ) 
            if(exist) {
                toast("Item já adicionado no carrinho.");
                return (
                    {cart: [...state.cart] }
                )
            }else {
                return (
                    state.total += Number(item.price),
                    item.qtd = 1,
                    { cart: [...state.cart, item]}
                )
            }
        }),

        removeFromCart: (itemIput) => set((state) => {
            console.log(itemIput.qtd)
            if(state.cart.length <= 1) {
                return (
                    state.total = 0,
                    { cart: state.cart.filter((item) => item.id != itemIput.id) }
                )
            }else if(itemIput.qtd > 1) {
                return (
                    state.total -= (Number(itemIput.price) * itemIput.qtd),
                    { cart: state.cart.filter((item) => item.id != itemIput.id)}
                )
            }else {
                return (
                    state.total -= Number(itemIput.price),
                    { cart: state.cart.filter((item) => item.id != itemIput.id)}
                )
            }
        }),

        someTotal: (itemIput) => set((state) => {
            return (
                state.total += Number(itemIput.price),
                { cart: [...state.cart]}
            )
        }),

        subTractTotal: (itemIput, qtd) => set((state) => {
            if(qtd > 1) {
                return (
                    state.total -= (Number(itemIput.price) * qtd),
                    { cart: state.cart.filter((item) => item.id != itemIput.id)}
                )
            }else {
                return (
                    state.total -= Number(itemIput.price),
                    { cart: [...state.cart]}
                )
            }
        })
    }
})

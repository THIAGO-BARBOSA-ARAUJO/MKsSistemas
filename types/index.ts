
export type Product = {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
}

export type ProductCartType = {
    id: number,
    name: string,
    description?: string,
    qtd: string
    photo: string,
    price: string,
}
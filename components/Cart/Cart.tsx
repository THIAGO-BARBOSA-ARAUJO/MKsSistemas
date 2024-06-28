import styles from './Cart.module.scss'
import Image from 'next/image'
import { ProductCart } from '../ProductCart/ProductCart'
import { ProductCartType } from '@/types'
import { useCartStorage, useOpenCloseCartStorage } from '@/hooks/useCartStorage'
import { motion } from "framer-motion"

export const Cart = ( ) => {

  const cartStorage = useOpenCloseCartStorage()

  const productCart = useCartStorage((state) => state.cart)

  const getTotal = (): string => {
    let total = 0
    productCart.forEach((product) => {
      total += Number(product.price) 
    });

    return String(total.toFixed(2)).replace('.', ',')
  }

  return (
    <motion.div 
    className={styles.container}
    whileInView={cartStorage.isOpen ? { opacity: 1, x: 0 } : { opacity: 0,  x: 600}}
    transition={{ duration: 1 }}
    initial={{opacity: 0,  x: 600}}
    >
        <header>
            <div>
                <h1>Carrinho</h1>
                <h2>de compras</h2>
            </div>
            <button onClick={cartStorage.handleClose} className={styles.containerClose}>
                <Image src='/assets/Close.svg' width={38} height={38} alt="imagem de close" />
            </button>
        </header>

        <main>
          {productCart.length > 0 ? (
            productCart.map((item: ProductCartType) => {
              return (
                <ProductCart item={item}/>
              )
            })  
          ) : 
          'Loadingggg'
          }
        </main>

        <footer>
          <div className={styles.containerTotal}>
            <p>Total:</p>
            <p>R${getTotal()}</p>
          </div>
          <button onClick={cartStorage.handleClose}>Finalizar Compra</button>
        </footer>
    </motion.div>
  )
}
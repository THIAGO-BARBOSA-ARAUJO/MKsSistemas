import styles from './Cart.module.scss'
import Image from 'next/image'
import { ProductCart } from '../ProductCart/ProductCart'
import { ProductCartType } from '@/types'
import { useCartStorage, useOpenCloseCartStorage } from '@/hooks/useCartStorage'
import { motion } from "framer-motion"

export const Cart = ( ) => {

  const cartStorage = useOpenCloseCartStorage()

  let [productCart, total] = useCartStorage((state) => [state.cart, state.total])

  const getTotal = (): string => {
    return String(total.toFixed(2)).replace('.', ',')
  }

  return (
    <motion.div 
    className={styles.container}
    whileInView={cartStorage.isOpen ? { opacity: 1, x: 0 } : { opacity: 0,  x: '100%'}}
    transition={{ duration: 1 }}
    initial={{opacity: 0,  x: '100%'}}
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
            <ProductCart key={item.id} item={item}/>
          )
        })  
      ) : 
      (
        <div className={styles.emptCart}>
          <div className={styles.imageEmpty}>
            <Image src='/assets/empt-cart.svg' fill alt="imagem do produto" />
          </div>
          <h1>Seu carrinho está vazio. Volte e compre alguma coisa.</h1>
        </div>
      )
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
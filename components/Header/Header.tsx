'use client'
import styles from './Header.module.scss'
import Image from 'next/image'
import { Cart } from '../Cart/Cart'
import { useCartStorage, useOpenCloseCartStorage } from '@/hooks/useCartStorage'

export const Header = () => {
  const productCart = useCartStorage((state) => state.cart)
  
  const cartStorage = useOpenCloseCartStorage()

  return (
    <header className={styles.container}>
      <div className={styles["logo-container"]}>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <button onClick={cartStorage.handleOpen}>
        <Image src='/assets/Vector.svg' width={18} height={18} alt="imagem do cart" />
        <p>{productCart.length}</p>
      </button>
    </header>
  )
}

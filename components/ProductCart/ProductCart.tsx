import styles from './ProductCart.module.scss'
import Image from 'next/image'
import { ProductCartType } from '../../types/index'
import { useCartStorage } from '@/hooks/useCartStorage'
import { useState } from 'react'

type PropsCart = {
    item: ProductCartType
}

export const ProductCart = ({item}: PropsCart) => {

    let [removeFromCart, someTotal, subTractTotal] = useCartStorage((state) => [state.removeFromCart, state.someTotal, state.subTractTotal])
    let [ qtd, setQtd ] = useState(item.qtd)

    const addQtd = (item: ProductCartType) => {
        setQtd(qtd + 1)
        item.qtd = item.qtd + 1
        someTotal(item)
    }

    const removeQtd = (item: ProductCartType) => {
       if(qtd > 1) {
        setQtd(qtd - 1)
        item.qtd = item.qtd - 1
        subTractTotal(item, 1)
       }
    }

    return (
        <div key={item.id} className={styles.containerProductCart}>
            <div className={styles.product}>
                <div className={styles.containerImg}> 
                    <Image src={item.photo} fill alt="imagem do item" />
                </div>
                
                <h1>{item.name}</h1>

                <div className={styles.containerQtdPrice}>
                    <div className={styles.qtdContainer}>
                        <p>Qtd:</p>
                        <div className={styles.btnValue}>
                            <button onClick={() => removeQtd(item)}>-</button>
                            <div className={styles.lineV}></div>
                            <p>{item.qtd}</p>
                            <div className={styles.lineV}></div>
                            <button onClick={() => addQtd(item)}>+</button>
                        </div>
                    </div>
                    <p className={styles.total}>R${item.price.replace('.', ',')}</p>
                </div>

                <div onClick={() => removeFromCart(item)} className={styles.containerImageClose}>
                    <Image src='/assets/Close.svg' width={18} height={18} alt="imagem de close" />
                </div>
            </div>
        </div>
    )

}
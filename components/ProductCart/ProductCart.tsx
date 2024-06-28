import styles from './ProductCart.module.scss'
import Image from 'next/image'
import { ProductCartType } from '../../types/index'
import { useCartStorage } from '@/hooks/useCartStorage'

type PropsCart = {
    item: ProductCartType
}

export const ProductCart = ({item}: PropsCart) => {

    const removeFromCart = useCartStorage((state) => state.removeFromCart)

    return (
        <div className={styles.containerProductCart}>
            <div className={styles.product}>
                <div className={styles.containerImg}> 
                    <Image src={item.photo} width={46} height={57} alt="imagem do item" />
                </div>
                
                <h1>{item.name}</h1>

                <div className={styles.qtdContainer}>
                    <p>Qtd:</p>
                    <div className={styles.btnValue}>
                        <button>-</button>
                        <div className={styles.lineV}></div>
                        <p>1</p>
                        <div className={styles.lineV}></div>
                        <button>+</button>
                    </div>
                </div>

                <p className={styles.total}>R${item.price.replace('.', ',')}</p>
            </div>

            <div onClick={() => removeFromCart(item)} className={styles.containerImageClose}>
                <Image src='/assets/Close.svg' width={18} height={18} alt="imagem de close" />
            </div>
        </div>
    )

}
import styles from './Product.module.scss'
import { ProductCartType } from '../../types/index'
import Image from 'next/image'
import { useCartStorage } from '@/hooks/useCartStorage'
import 'react-toastify/dist/ReactToastify.min.css'; 


type ProductType = {
    item: ProductCartType,
    key: number,
}

export const ProductItem = ({item}: ProductType) => {

    const [ addCart ] = useCartStorage((state) => [state.addToCart])

    return (
        <div className={styles.container}>
            <div className={styles.containerItems}>
                <Image src={`${item.photo}`} width={111} height={138} alt="imagem do produto" />
                <div className={styles.boxTitleValue}>
                    <h1 className='title'>{item.name}</h1>
                    <div className={styles.containerValue}>
                        <p className='value'>R${item.price}</p>
                    </div>
                </div>
                <p className={styles.subtitle}>{item.description}</p>
            </div>
            <button onClick={() => {addCart(item)}} className={styles.purchase}>
                <Image src='/assets/imageBag.svg' width={13} height={13} alt="imagem do produto" />
                <p>COMPRAR</p>
            </button>
        </div>
    )
}

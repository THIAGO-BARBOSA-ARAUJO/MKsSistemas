'use client'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from '../Product/Product'
import styles from './Home.module.scss'
import api from '@/services/api'
import { Cart } from '../Cart/Cart'

export const Home = () => {

  const getProducts = async () => {
    const response  = await api.get('/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    
    return response.data
  }
  
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <div>
      <main className={styles.container}>
        {isLoading ? 'loading...': data.products.map((item: any) => {
          return (
            <ProductItem key={item.id} item={item} />
          )
        })}
        <Cart />
      </main>
    </div>
  )
}

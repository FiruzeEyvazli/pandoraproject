import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from '../../../../components/card/productCard/ProductCard'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'
import styles from "./ProductSection.module.scss"
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
const ProductSection = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)



    useEffect(() => {dispatch(getProductsThunk())}, {})


    
    const AddBasket = (item) => {
      dispatch(postBasketThunk(item))
  }

    if(loading) return <p>Yuklenir....</p>
    if(error) return <p>Xeta bas verdi....</p>

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>Trending Now</h1>
      </div>
      <div className={styles.products}>
        {products && products.map(item => <ProductCard item={item} AddBasket={() => AddBasket(item)}/>)}
      </div>
    </div>
  )
}

export default ProductSection
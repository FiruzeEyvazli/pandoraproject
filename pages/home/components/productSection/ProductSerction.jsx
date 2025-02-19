import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from '../../../../components/card/productCard/ProductCard'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'
import styles from "./ProductSection.module.scss"
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import { postWishlistThunk } from '../../../../redux/reducers/wishlistSlice'
const ProductSection = () => {


    const dispatch = useDispatch()


    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)



    useEffect(() => {dispatch(getProductsThunk())}, {})


    
    const AddBasket = (item) => {
      dispatch(postBasketThunk(item))
  }

  const AddWishlist = (item) => {
    dispatch(postWishlistThunk(item))
}



 
  //pagination
  const [page, setPage] = useState(1)
  const [productsPage, setProductsPage] = useState(4)

  const lastProductIndex = page * productsPage
  const firstProductIndex = lastProductIndex - productsPage
  const currentProducts = products.slice(firstProductIndex, lastProductIndex)

  let dummy = []

  for(let i = 1; i <= Math.ceil(products.length / productsPage); i++) {
    dummy.push(i)
  }

  // 


    if(loading) return <p>Yuklenir....</p>
    if(error) return <p>Xeta bas verdi....</p>

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>Trending Now</h1>
      </div>
      {/* <div className={styles.products}>
        {products && products.map(item => <ProductCard item={item} AddBasket={() => AddBasket(item)}/>)}
      </div> */}


<div className={styles.products}>
       {currentProducts && currentProducts.map(item => <ProductCard item={item} AddBasket={() => AddBasket(item)} AddWishlist={() => AddWishlist(item)} />)}
    </div>

    <div className={styles.onclick}>
        {dummy && dummy.map(item => { return <button className={styles.buttons} onClick={() => setPage(item)}>{item}</button>
        })}
    </div>


    </div>
  )
}

export default ProductSection
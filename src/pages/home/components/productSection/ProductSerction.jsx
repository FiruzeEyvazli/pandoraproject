import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from '../../../../components/card/productCard/ProductCard'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'

const ProductSection = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)



    useEffect(() => {dispatch(getProductsThunk())}, {})




    if(loading) return <p>Yuklenir....</p>
    if(error) return <p>Xeta bas verdi....</p>

  return (
    <div>
        {products && products.map(item => <ProductCard item={item} />)}
    </div>
  )
}

export default ProductSection
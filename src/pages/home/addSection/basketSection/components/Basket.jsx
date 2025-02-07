import { useDispatch, useSelector } from "react-redux"
import { deleteBasketThunk, getBasketThunk } from "../../../../../redux/reducers/basketSlice"
import { useEffect } from "react"
import BasketCard from "../../../../../components/card/basketCard/BasketCard"
import styles from "./Basket.module.scss"

const Basket = () => {

    const dispatch = useDispatch()

    const basket = useSelector(state => state.basket.basket)
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.error)


    const DeleteBasket = (id) => {
        dispatch(deleteBasketThunk(id))
    }

    useEffect(() => {dispatch(getBasketThunk())}, [])




    if (loading) return <p>Yuklenir....</p>
    if (error) return <p>Xeta bas verdi....</p>



  return (
    <div className={styles.section}>
        <div className={styles.header}>
            <h1>My Basket</h1>
        </div>
        <div className={styles.products}>
        {basket && basket.map(item => <BasketCard item={item} DeleteBasket= {() => DeleteBasket(item._id)}/>)}
        </div>
    </div>
  )
}

export default Basket
import { useDispatch, useSelector } from "react-redux"
import { deleteBasketThunk, getBasketThunk, postBasketThunk } from "../../../../../redux/reducers/basketSlice"
import { useEffect, useState } from "react"
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


    
      //pagination
      const [page, setPage] = useState(1)
      const [basketPage, setbasketPage] = useState(3)
    
      const lastBasketIndex = page * basketPage
      const firstBasketIndex = lastBasketIndex - basketPage
      const currentBasket = basket.slice(firstBasketIndex, lastBasketIndex)
    
      let dummy = []
    
      for(let i = 1; i <= Math.ceil(basket.length / basketPage); i++) {
        dummy.push(i)
      }
    
      // 
    

    useEffect(() => {dispatch(getBasketThunk())}, [])




    if (loading) return <p>Yuklenir....</p>
    if (error) return <p>Xeta bas verdi....</p>



  return (
    <div className={styles.section}>
        <div className={styles.header}>
            <h1>My Basket</h1>
        </div>


<div className={styles.products}>
       {currentBasket && currentBasket.map(item => <BasketCard item={item} DeleteBasket= {() => DeleteBasket(item._id)} />)}
    </div>

    <div className={styles.onclick}>
        {dummy && dummy.map(item => { return <button className={styles.buttons} onClick={() => setPage(item)}>{item}</button>
        })}
    </div>
    </div>
  )
}

export default Basket
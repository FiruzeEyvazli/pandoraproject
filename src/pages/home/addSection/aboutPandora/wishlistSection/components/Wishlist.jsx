import React, { useEffect, useState } from 'react'
import styles from "./Wishlist.module.scss"
import WishlistCard from '../../../../../../components/card/wishlistCard/WishlistCard'
import { deleteWishlistThunk, getWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
const Wishlist = () => {

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist.wishlist)
    const loading = useSelector(state => state.wishlist.loading)
    const error = useSelector(state => state.wishlist.error)


    const DeleteWishlist = (id) => {
        dispatch(deleteWishlistThunk(id))

    }


    
      //pagination
      const [page, setPage] = useState(1)
      const [wishlistPage, setwishlistPage] = useState(3)
    
      const lastWishlistIndex = page * wishlistPage
      const firstWishlistIndex = lastWishlistIndex - wishlistPage
      const currentWishlist = wishlist.slice(firstWishlistIndex, lastWishlistIndex)
    
      let dummy = []
    
      for(let i = 1; i <= Math.ceil(wishlist.length / wishlistPage); i++) {
        dummy.push(i)
      }
    
      // 
    

    useEffect(() => {dispatch(getWishlistThunk())}, [])




    if (loading) return <p>Yuklenir....</p>
    if (error) return <p>Xeta bas verdi....</p>


  return (
    <div className={styles.section}>
    <div className={styles.header}>
        <h1>My Wishlist</h1>
    </div>


<div className={styles.products}>
   {currentWishlist && currentWishlist.map(item => <WishlistCard item={item} DeleteWishlist= {() => DeleteWishlist(item._id)} />)}
</div>

<div className={styles.onclick}>
    {dummy && dummy.map(item => { return <button className={styles.buttons} onClick={() => setPage(item)}>{item}</button>
    })}
</div>
</div>
  )
}

export default Wishlist
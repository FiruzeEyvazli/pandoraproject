import React, { useEffect, useState } from 'react'
import styles from "./Wishlist.module.scss"
import WishlistCard from '../../../../../../components/card/wishlistCard/WishlistCard'
import { deleteWishlistThunk, getWishlistThunk, updateWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
const Wishlist = () => {

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist.wishlist)
    const loading = useSelector(state => state.wishlist.loading)
    const error = useSelector(state => state.wishlist.error)


    
     
        const getTotalQuantity = () => {
            return wishlist.reduce((total, item) => total + item.quantity, 0);
        };
    
        const DeleteWishlist = (id) => {
          dispatch(deleteWishlistThunk(id)).then(() => {
              dispatch(getWishlistThunk()); // Backend'den güncel veriyi tekrar çek
          });
      };
      
        const increaseQuantity = (id) => {
            const updatedProduct = wishlist.find(item => item._id === id);
            const updatedItem = { ...updatedProduct, quantity: updatedProduct.quantity + 1 };
            dispatch(updateWishlistThunk(updatedItem));
        };
    
        const decreaseQuantity = (id) => {
            const updatedProduct = wishlist.find(item => item._id === id);
            if (updatedProduct.quantity > 1) {
                const updatedItem = { ...updatedProduct, quantity: updatedProduct.quantity - 1 };
                dispatch(updateWishlistThunk(updatedItem));
            }
        };
    
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
      <div className={styles.one}>
        <h1>Sevimlilərim</h1>
      </div>
    </div>
      <div className={styles.two}>
        <p>Məhsul sayı: {getTotalQuantity()}</p>
      </div>
    <div className={styles.products}>
        {currentWishlist.length > 0 ? (
            currentWishlist.map(item => (
                <WishlistCard 
                    key={item._id} 
                    item={item} 
                    DeleteWishlist={() => DeleteWishlist(item._id)} 
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            ))
        ) : (
            <p>Səbətdə mehsul yoxdur!</p>
        )}
    </div>
    <div className={styles.onclick}>
        {dummy.map(item => (
            <button key={item} className={styles.buttons} onClick={() => setPage(item)}>
                {item}
            </button>
        ))}
    </div>
</div>
  )
}

export default Wishlist
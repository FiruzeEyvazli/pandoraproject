import React from 'react'
import styles from './WishlistCard.module.scss'
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({item,DeleteWishlist, increaseQuantity,decreaseQuantity}) => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={item.image} alt="" />
        <div className={styles.functions}>
        <div className={styles.buttons}>
          <button onClick={DeleteWishlist}><RiDeleteBin6Line /></button>
        </div>
        <div className={styles.quantity}>
          <button onClick={() => decreaseQuantity(item._id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item._id)}>+</button>
        </div>
        </div>

      </div>
      <div className={styles.text}>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>
    </div>
  </div>
  )
}

export default WishlistCard
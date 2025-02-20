import React from 'react'
import styles from './WishlistCard.module.scss'
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistCard = ({item,DeleteWishlist}) => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={item.image} alt="" />
        <div className={styles.functions}>
        <div className={styles.buttons}>
          <button onClick={DeleteWishlist}><RiDeleteBin6Line /></button>
        </div>
        
        </div>

      </div>
      <div className={styles.text}>
        <h3>{item.title}</h3>
        <p>{item.price}$</p>
      </div>
    </div>
  </div>
  )
}

export default WishlistCard
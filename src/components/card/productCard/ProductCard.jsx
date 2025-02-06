import React from 'react'
import styles from "./ProductCard.module.scss"
const ProductCard = ({item}) => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
        <div className={styles.imgBox}>
            <img src={item.image} alt="" />
        </div>
        <p>{item.title}</p>
        <p>{item.price}</p>

        {/* <div>
            <button onClick={AddBasket}>Basket</button>
        </div> */}
    </div>
</div>
  )
}

export default ProductCard
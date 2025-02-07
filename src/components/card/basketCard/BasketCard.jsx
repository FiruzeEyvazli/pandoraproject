import React from 'react'
import styles from "./BasketCard.module.scss"
import { RiDeleteBin6Line } from "react-icons/ri";
const BasketCard = ({item,DeleteBasket}) => {
  return (
    <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBox}>
                        <img src={item.image} alt="" />
                    <div className={styles.buttons}>
                        <button onClick={DeleteBasket}><RiDeleteBin6Line /></button>
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

export default BasketCard
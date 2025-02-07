import React, { useState } from 'react'
import styles from "./ProductCard.module.scss"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
const ProductCard = ({item, AddBasket}) => {

  const [addedToBasket, setAddedToBasket] = useState(false);



  const handleAddToBasket = () => {
    AddBasket(item);  // Məhsulu basketə əlavə et
    setAddedToBasket(true);  // Məhsul əlavə edildikdən sonra "Added" mesajını göstər

    // "Added" mesajının 2 saniyə sonra yox olması üçün setTimeout istifadə edirik
    setTimeout(() => {
      setAddedToBasket(false);  // 2 saniyə sonra mesajı gizlə
    }, 500);  // 2000 ms (2 saniyə)
  };


  return (
    <div className={styles.container}>
    <div className={styles.card}>
        <div className={styles.imgBox}>
            <img src={item.image} alt="products" />
        <div className={styles.buttons}>
            <button className={styles.heart}><FaRegHeart /></button>
            <button onClick={handleAddToBasket}>
              <HiOutlineShoppingBag />
              {/* Məhsul əlavə edildikdə "Added" mesajını göstər */}
              {addedToBasket && <span className={styles.addedMessage}>Added</span>}
            </button>
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

export default ProductCard
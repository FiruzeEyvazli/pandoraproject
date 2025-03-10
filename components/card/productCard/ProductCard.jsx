import React, { useState } from 'react'
import styles from "./ProductCard.module.scss"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
const ProductCard = ({ item, AddBasket, AddWishlist }) => {

  const [addedToBasket, setAddedToBasket] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);


  const handleAddToBasket = (event) => {
    event.preventDefault();  // Link klikini tamamilə bloklayır
    event.stopPropagation(); // Parent klikləri də bloklayır
    AddBasket(item);
    setAddedToBasket(true);
    setTimeout(() => setAddedToBasket(false), 500);
  };
  
  const handleAddToWishlist = (event) => {
    event.preventDefault();  // Link klikini tamamilə bloklayır
    event.stopPropagation(); // Parent klikləri də bloklayır
    AddWishlist(item);
    setAddedToWishlist(true);
    setTimeout(() => setAddedToWishlist(false), 500);
  };
  


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={item.image} alt="products" />
          <div className={styles.buttons}>
            <button onClick={(event) => handleAddToWishlist(event)}>
              <FaRegHeart />
              {addedToWishlist && <span className={styles.addedMessage}>Added</span>}
            </button>

            <button onClick={(event) => handleAddToBasket(event)}>
              <HiOutlineShoppingBag />
              {addedToBasket && <span className={styles.addedMessage}>Added</span>}
            </button>

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

export default ProductCard
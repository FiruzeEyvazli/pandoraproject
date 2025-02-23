import React from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={styles.text}>
          <h3>{item.title}</h3>
          <p>{item.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../../../../redux/reducers/productSlice';
import styles from './ProductDetailPage.module.scss';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>Xəta baş verdi: {error}</p>;

  // Məhsul məlumatı hələ yüklənməyibsə
  if (!product || !product.image) return <p>Məhsul məlumatı tapılmadı</p>;

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.imageBox}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price: ${product.price}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

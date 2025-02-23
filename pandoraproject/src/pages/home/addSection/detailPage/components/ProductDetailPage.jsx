import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../../../../redux/reducers/productSlice';
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice'; // Basket action
import { postWishlistThunk } from '../../../../../redux/reducers/wishlistSlice'; // Wishlist action
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Iconlar
import styles from './ProductDetailPage.module.scss';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);


  useEffect(() => {
    window.scrollTo(0, 0) // Səhifənin ən başına gedəcək
  }, []);

  useEffect(() => {
    dispatch(fetchProductDetails(id)); // Fetch product details based on the ID
  }, [dispatch, id]);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>Xəta baş verdi: {error}</p>;

  // Məhsul məlumatı hələ yüklənməyibsə
  if (!product || !product.image) return <p>Məhsul məlumatı tapılmadı</p>;

  // Wishlist və basket funksiyaları
  const addToWishlist = () => {
    dispatch(postWishlistThunk(product)); // Wishlistə əlavə etmək üçün dispatch
    console.log("Məhsul wishlistə əlavə edildi");
  };

  const addToBasket = () => {
    dispatch(postBasketThunk(product)); // Basketə əlavə etmək üçün dispatch
    console.log("Məhsul basketə əlavə edildi");
  };

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.imageBox}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.priceCategory}>
            <div>
            <p className={styles.price}><strong>Price: ${product.price}</strong></p>
            <p className={styles.category}>Category: {product.category}</p>
            </div>
          <div className={styles.actions}>
            <button className={styles.wishlistButton} onClick={addToWishlist}>
              <FaHeart size={24} color="#e74c3c" />
            </button>
            <button className={styles.basketButton} onClick={addToBasket}>
              <FaShoppingCart size={24} color="#3498db" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

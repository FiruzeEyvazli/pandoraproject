// Basket.js

import { useDispatch, useSelector } from "react-redux";
import { deleteBasketThunk, getBasketThunk, updateBasketThunk } from "../../../../../redux/reducers/basketSlice";
import { useEffect, useState } from "react";
import BasketCard from "../../../../../components/card/basketCard/BasketCard";
import styles from "./Basket.module.scss";
import { useNavigate } from "react-router-dom";
import { createPaymentIntentThunk } from "../../../../../redux/reducers/paymentSlice";


const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.basket);
  const loading = useSelector(state => state.basket.loading);
  const error = useSelector(state => state.basket.error);

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;


  

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [dispatch]);

  useEffect(() => {
    const totalPages = Math.ceil(basket.length / itemsPerPage);
    if (basket.length > 0 && page > totalPages) {
      setPage(totalPages || 1);
    }
  }, [basket, page]);

  const getTotalAmount = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const totalAmount = getTotalAmount();  
    if (basket.length === 0) {
      alert("Səbətiniz boşdur!");  
      return;
    }
    
    try {
      // Ödəniş intentini yaratmaq üçün redux thunk-ı çağırırıq
      const action = await dispatch(createPaymentIntentThunk(totalAmount * 100)); // Cəmi sentlə göndəririk
      
      if (createPaymentIntentThunk.fulfilled.match(action)) {
        const clientSecret = action.payload;
        console.log("✅ Alınan clientSecret:", clientSecret);  
  
        if (!clientSecret) {
          console.error("❌ clientSecret alınmadı!");
          alert("Ödəniş üçün lazımi məlumat tapılmadı.");
          return;
        }
  
        // `clientSecret` və digər məlumatları `PaymentPage`-ə göndəririk
        navigate("/payment", { 
          state: { 
            basket, 
            totalAmount, 
            clientSecret  // `clientSecret`-i burda göndəririk
          }
        });
      } else {
        throw new Error("Ödəniş alınmadı!");
      }
    } catch (error) {
      console.error("❌ Ödəniş zamanı xəta:", error);
      alert("Ödəniş əməliyyatı zamanı xəta baş verdi.");
    }
  };
  
  

  const handleDeleteBasket = (itemId) => {
    dispatch(deleteBasketThunk(itemId));
  };


  const lastBasketIndex = page * itemsPerPage;
  const firstBasketIndex = lastBasketIndex - itemsPerPage;

  const currentBasket = basket.slice(firstBasketIndex, lastBasketIndex);

  let pagesArray = [];
  for (let i = 1; i <= Math.ceil(basket.length / itemsPerPage); i++) {
    pagesArray.push(i);
  }

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>Xəta baş verdi...</p>;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>Səbətim</h1>
      </div>
      <div className={styles.two}>
        <p>Məhsul sayı: {basket.reduce((total, item) => total + item.quantity, 0)}</p>
      </div>
      <div className={styles.products}>
        {currentBasket.length > 0 ? (
          currentBasket.map(item => (
            <BasketCard 
              key={item._id} 
              item={item} 
              DeleteBasket={() => {
                if (item.quantity > 1) {
                  dispatch(updateBasketThunk({ ...item, quantity: item.quantity - 1 }));
                } else {
                  dispatch(deleteBasketThunk(item._id));
                }
              }}
              increaseQuantity={() => dispatch(updateBasketThunk({ ...item, quantity: item.quantity + 1 }))}
              decreaseQuantity={() => item.quantity > 1 && dispatch(updateBasketThunk({ ...item, quantity: item.quantity - 1 }))} 
            />
          ))
        ) : (
          <p>Səbətdə məhsul yoxdur!</p>
        )}
      </div>

      {basket.length > itemsPerPage && (
        <div className={styles.onclick}>
          {pagesArray.map(item => (
            <button 
              key={item} 
              className={`${styles.buttons} ${page === item ? styles.active : ""}`} 
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {basket.length > 0 && (
        <div className={styles.buttonContainer}>
          <button className={styles.totalAmountButton}>
            Ümumi: {getTotalAmount()} $
          </button>
          <button 
            className={styles.checkoutButton} 
            onClick={handleCheckout}
          >
            Ödəniş et
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;


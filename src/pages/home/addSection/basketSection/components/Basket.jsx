import { useDispatch, useSelector } from "react-redux";
import { deleteBasketThunk, getBasketThunk, updateBasketThunk } from "../../../../../redux/reducers/basketSlice";
import { useEffect, useState } from "react";
import BasketCard from "../../../../../components/card/basketCard/BasketCard";
import styles from "./Basket.module.scss";

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    const loading = useSelector(state => state.basket.loading);
    const error = useSelector(state => state.basket.error);

    // Sepetteki toplam ürün sayısını hesaplayan fonksiyon
    const getTotalQuantity = () => {
        return basket.reduce((total, item) => total + item.quantity, 0);
    };

    const DeleteBasket = (id) => {
      dispatch(deleteBasketThunk(id)).then(() => {
          dispatch(getBasketThunk()); // Backend'den güncel veriyi tekrar çek
      });
  };
  
    const increaseQuantity = (id) => {
        const updatedProduct = basket.find(item => item._id === id);
        const updatedItem = { ...updatedProduct, quantity: updatedProduct.quantity + 1 };
        dispatch(updateBasketThunk(updatedItem));
    };

    const decreaseQuantity = (id) => {
        const updatedProduct = basket.find(item => item._id === id);
        if (updatedProduct.quantity > 1) {
            const updatedItem = { ...updatedProduct, quantity: updatedProduct.quantity - 1 };
            dispatch(updateBasketThunk(updatedItem));
        }
    };

    // Pagination Logic
    const [page, setPage] = useState(1);
    const [basketPage, setBasketPage] = useState(3);
    const lastBasketIndex = page * basketPage;
    const firstBasketIndex = lastBasketIndex - basketPage;
    const currentBasket = basket.slice(firstBasketIndex, lastBasketIndex);

    let dummy = [];
    for (let i = 1; i <= Math.ceil(basket.length / basketPage); i++) {
        dummy.push(i);
    }

    useEffect(() => {
        dispatch(getBasketThunk());
    }, [dispatch]);

    if (loading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi...</p>;

    return (
        <div className={styles.section}>
            <div className={styles.header}>
              <div className={styles.one}>
                <h1>Səbətim</h1>
              </div>
            </div>
              <div className={styles.two}>
                <p>Məhsul sayı: {getTotalQuantity()}</p>
              </div>
            <div className={styles.products}>
                {currentBasket.length > 0 ? (
                    currentBasket.map(item => (
                        <BasketCard 
                            key={item._id} 
                            item={item} 
                            DeleteBasket={() => DeleteBasket(item._id)} 
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    ))
                ) : (
                    <p>Səbətdə mehsul yoxdur!</p>
                )}
            </div>
            <div className={styles.onclick}>
                {dummy.map(item => (
                    <button key={item} className={styles.buttons} onClick={() => setPage(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Basket;

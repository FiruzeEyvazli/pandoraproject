import { useDispatch, useSelector } from "react-redux";
import { deleteBasketThunk, getBasketThunk, updateBasketThunk } from "../../../../../redux/reducers/basketSlice";
import { useEffect, useState } from "react";
import BasketCard from "../../../../../components/card/basketCard/BasketCard";
import styles from "./Basket.module.scss";
import { useNavigate } from "react-router-dom";

const Basket = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    const loading = useSelector(state => state.basket.loading);
    const error = useSelector(state => state.basket.error);

    // Səbətin ümumi məbləğini hesablayan funksiya
    const getTotalAmount = () => {
        const total = basket.reduce((total, item) => total + item.price * item.quantity, 0);
        console.log("Ümumi məbləğ:", total); // Konsolda yoxlamaq üçün
        return total;
    };

    const handleCheckout = () => {
        if (basket.length === 0) {
            alert("Səbətiniz boşdur!");
            return;
        }

        const totalAmount = getTotalAmount();
        console.log("Checkout zamanı göndərilən məbləğ:", totalAmount); // Yoxlama üçün

        navigate("/payment", { state: { totalAmount } });
    };

    useEffect(() => {
        dispatch(getBasketThunk());
    }, [dispatch]);

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
                {basket.length > 0 ? (
                    basket.map(item => (
                        <BasketCard 
                            key={item._id} 
                            item={item} 
                            DeleteBasket={() => dispatch(deleteBasketThunk(item._id))}
                            increaseQuantity={() => dispatch(updateBasketThunk({ ...item, quantity: item.quantity + 1 }))}
                            decreaseQuantity={() => item.quantity > 1 && dispatch(updateBasketThunk({ ...item, quantity: item.quantity - 1 }))}
                        />
                    ))
                ) : (
                    <p>Səbətdə mehsul yoxdur!</p>
                )}
            </div>
            {basket.length > 0 && (
                <button className={styles.checkoutButton} onClick={handleCheckout}>
                    Ödəniş et
                </button>
            )}
        </div>
    );
};

export default Basket;

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

    const [page, setPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        dispatch(getBasketThunk());
    }, [dispatch]);

    // Səhifənin boş qalmasının qarşısını almaq üçün istifadə olunur
    useEffect(() => {
        const totalPages = Math.ceil(basket.length / itemsPerPage);
        if (basket.length > 0 && page > totalPages) {
            setPage(totalPages || 1);
        }
    }, [basket, page]);

    const getTotalAmount = () => {
        return basket.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        if (basket.length === 0) {
            alert("Səbətiniz boşdur!");
            return;
        }
        const totalAmount = getTotalAmount();
        navigate("/payment", { state: { totalAmount } });
    };

    const handleDeleteBasket = (itemId) => {
        // Məhsul silindikdən sonra səhifəni avtomatik yenilə
        dispatch(deleteBasketThunk(itemId));
    };

    // Səhifələnmə üçün lazım olan indekslər
    const lastBasketIndex = page * itemsPerPage;
    const firstBasketIndex = lastBasketIndex - itemsPerPage;

    // Məhsulları ardıcıl göstərmək üçün silinmiş məhsulları nəzərə alırıq
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
                    <button className={styles.checkoutButton} onClick={handleCheckout}>
                        Ödəniş et
                    </button>
                </div>
            )}
        </div>
    );
};

export default Basket;

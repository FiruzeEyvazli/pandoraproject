import React, { useEffect, useState } from 'react'
import styles from "./Wishlist.module.scss"
import WishlistCard from '../../../../../../components/card/wishlistCard/WishlistCard'
import { deleteWishlistThunk, getWishlistThunk, updateWishlistThunk } from '../../../../../../redux/reducers/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const loading = useSelector(state => state.wishlist.loading)
    const error = useSelector(state => state.wishlist.error)

    const [page, setPage] = useState(1)
    const itemsPerPage = 3;

    useEffect(() => {
        dispatch(getWishlistThunk())
    }, [dispatch]);

    // Silinməni idarə edən funksiya
    const handleDeleteWishlist = (id) => {
        dispatch(deleteWishlistThunk(id)).then(() => {
            dispatch(getWishlistThunk());
        });
    };

    // Səhifələnməni idarə etmək
    useEffect(() => {
        const totalPages = Math.ceil(wishlist.length / itemsPerPage);
        if (wishlist.length > 0 && page > totalPages) {
            setPage(totalPages || 1);
        }
    }, [wishlist, page]);

    // Pagination üçün göstəriləcək məhsullar
    const lastWishlistIndex = page * itemsPerPage;
    const firstWishlistIndex = lastWishlistIndex - itemsPerPage;
    const currentWishlist = wishlist.slice(firstWishlistIndex, lastWishlistIndex);

    let pagesArray = [];
    for (let i = 1; i <= Math.ceil(wishlist.length / itemsPerPage); i++) {
        pagesArray.push(i);
    }

    if (loading) return <p>Yüklənir...</p>
    if (error) return <p>Xəta baş verdi...</p>

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h1>Sevimlilərim</h1>
            </div>

            <div className={styles.products}>
                {currentWishlist.length > 0 ? (
                    currentWishlist.map(item => (
                        <WishlistCard 
                            key={item._id} 
                            item={item} 
                            DeleteWishlist={() => handleDeleteWishlist(item._id)} 
                        />
                    ))
                ) : (
                    <p>Sevimlilər siyahınız boşdur!</p>
                )}
            </div>

            {wishlist.length > itemsPerPage && (
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
        </div>
    )
}

export default Wishlist;

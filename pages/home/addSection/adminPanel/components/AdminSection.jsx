import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThunk, getProductsThunk } from '../../../../../redux/reducers/productSlice'
import styles from "./AdminSection.module.scss"

const AdminSection = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)

    const [searchTerm, setSearchTerm] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")
    const [sortBy, setSortBy] = useState("price")

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    const deleteProducts = (id) => {
        dispatch(deleteProductThunk(id))
    }

    // Axtarış və Sortlama
    const filteredProducts = products
        ?.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        ?.sort((a, b) => {
            if (sortBy === "price") {
                return sortOrder === "asc" ? a.price - b.price : b.price - a.price
            } else if (sortBy === "title") {
                return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
            }
            return 0;
        })

    const getSortButtonLabel = () => {
        if (sortBy === "price") {
            return sortOrder === "asc" ? "Ən ucuzdan bahaya" : "Ən bahadan ucuza";
        } else if (sortBy === "title") {
            return sortOrder === "asc" ? "A-dan Z-yə" : "Z-dən A-ya";
        }
        return "Sırala";
    }

    if (loading) return <p className={styles.loading}>Yüklənir....</p>
    if (error) return <p className={styles.error}>Xəta baş verdi......</p>

    return (
        <div className={styles.admin}>
            <div className={styles.controlPanel}>
                <h1>Admin Panel</h1>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    placeholder="Məhsul axtar..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className={styles.sortSelect} onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="price">Qiymətə görə</option>
                    <option value="title">Başlığa görə</option>
                </select>
                <button className={styles.sortButton} onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}> 
                    {getSortButtonLabel()}
                </button>
            </div>

            <table className={styles.productTable}>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Funksiya</th>
                </tr>

                {filteredProducts && filteredProducts.map(item => (
                    <tr key={item._id}>
                        <td>
                            <div className={styles.box}><img className={styles.productImage} src={item.image} alt="" /></div>
                        </td>
                        <td>
                            <div className={styles.box}>{item.title}</div>
                        </td>
                        <td>
                            <div className={styles.box}>{item.price}$</div>
                        </td>
                        <td>
                            <div className={styles.box}>
                                <button className={styles.deleteButton} onClick={() => deleteProducts(item._id)}>Sil</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default AdminSection

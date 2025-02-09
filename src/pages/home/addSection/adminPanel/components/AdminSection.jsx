import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { deleteProductThunk, getProductsThunk } from '../../../../../redux/reducers/productSlice'
import styles from "./AdminSection.module.scss"
const AdminSection = () => {
    const dispatch =useDispatch()

    const products =useSelector(state=> state.products.products)
    const loading =useSelector(state=> state.products.loading)
    const error = useSelector(state=> state.products.error)
  


    const deleteProducts = (id) => {
        dispatch(deleteProductThunk(id))
    }

    useEffect(() => {dispatch(getProductsThunk())}, [])
  
  
    if(loading) return <p>Yuklenir....</p>
    if(error) return <p>Xeta bas verdi......</p>
  return (
    <div className={styles.admin}>
        <div>
            <h1>Admin Panel</h1>
        </div>

<table style={{width: '90%', border: '1px solid black'}}>
<tr style={{border: '1px solid black'}}>
  <th style={{border: '1px solid black'}}>Image</th>
  <th style={{border: '1px solid black'}}>Title</th>
  <th style={{border: '1px solid black'}}>Price</th>
  <th style={{border: '1px solid black'}}>Funksiya</th>
</tr>

        {products && products.map(item => (
            <tr>
                            <td style={{ border: '1px solid black' }}>
                                <div className={styles.box}><img style={{ width: '30%' }} src={item.image} alt="" /></div>
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <div className={styles.box}>{item.title}</div></td>
                            <td style={{ border: '1px solid black' }}>
                                <div className={styles.box}>
                                {item.price}
                                </div>
                                </td>
                            <td style={{ border: '1px solid black' }}>
                                <div className={styles.box}>
                                <button onClick={() => deleteProducts(item._id)}>Sil</button>
                                </div>
                            </td>
                        </tr>

))}
</table>
    </div>
  )
}

export default AdminSection
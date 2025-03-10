import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFormikThunk, deleteProductThunk, getProductsThunk } from '../../../../../redux/reducers/productSlice';
import styles from './AdminSection.module.scss';
import { useFormik } from 'formik';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AdminSection = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('price');
  const [isFormVisible, setIsFormVisible] = useState(false); // Formun görünürlüğünü idarə edən state


  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  
  const deleteProducts = (id) => {
    dispatch(deleteProductThunk(id));
  };

  // Axtarış və Sortlama
  const filteredProducts = products
    ?.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    ?.sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortBy === 'title') {
        return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
      return 0;
    });

  const getSortButtonLabel = () => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? 'Ən ucuzdan bahaya' : 'Ən bahadan ucuza';
    } else if (sortBy === 'title') {
      return sortOrder === 'asc' ? 'A-dan Z-yə' : 'Z-dən A-ya';
    }
    return 'Sırala';
  };

  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: '',
      category: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await dispatch(addFormikThunk(values));
        resetForm(); // Form sahələrini sıfırlayın
        setIsFormVisible(false); // Məhsul əlavə edildikdən sonra formu bağlayın
      } catch (error) {
        console.error('Məhsul əlavə edilərkən xəta baş verdi:', error);
      }
    },
  });

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  if (loading) return <p className={styles.loading}>Yüklənir....</p>;
  if (error) return <p className={styles.error}>Xəta baş verdi......</p>;

  return (
    <div className={styles.admin}>
      <div className={styles.addSection}>
        <button className={styles.addButton} onClick={toggleFormVisibility}>
          Add new product {isFormVisible ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isFormVisible && (
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <label htmlFor="image">Image</label>
            <input
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.image}
              placeholder="Enter image URL"
            />
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Enter the product title"
            />
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              placeholder="Enter the price"
            />
            <label htmlFor="category">Category</label>
            <input
              id="category"
              name="category"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.category}
              placeholder="Enter the category"
            />
            <button type="submit" className={styles.submitButton}>ADD</button>
          </form>
        )}
      </div>
      <div className={styles.controlPanel}>
        <h1>Admin Panel</h1>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Məhsul axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className={styles.sortSelect}
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="price">Qiymətə görə</option>
          <option value="title">Başlığa görə</option>
        </select>
        <button
          className={styles.sortButton}
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          {getSortButtonLabel()}
        </button>
      </div>

      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Qiymət</th>
            <th>Funksiya</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts &&
            filteredProducts.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className={styles.box}>
                    <img className={styles.productImage} src={item.image} alt={item.title} />
                  </div>
                </td>
                <td>
                  <div className={styles.box}>{item.title}</div>
                </td>
                <td>
                  <div className={styles.box}>{item.price}$</div>
                </td>
                <td>
                  <div className={styles.box}>
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteProducts(item._id)}
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};


export default AdminSection;

 



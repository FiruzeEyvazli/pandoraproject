import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Payment.module.scss';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const totalAmount = location.state?.totalAmount || Number(localStorage.getItem("totalAmount")) || 0;

    console.log("Payment səhifəsinə gələn məbləğ:", totalAmount);

    useEffect(() => {
        if (totalAmount === 0) {
            toast.error("Səbətiniz boşdur!");
            navigate("/basket");
        }
    }, [totalAmount, navigate]);

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();

        // Kart nömrəsini sanitizasiya edirik
        const sanitizedCardNumber = cardNumber.replace(/\s/g, '');
        if (sanitizedCardNumber.length !== 16) {
            toast.error("Kart nömrəsi 16 rəqəmdən ibarət olmalıdır!");
            return;
        }
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            toast.error("Kartın son istifadə tarixi MM/YY formatında olmalıdır!");
            return;
        }
        if (cvv.length !== 3) {
            toast.error("CVV 3 rəqəmdən ibarət olmalıdır!");
            return;
        }

        const paymentData = {
            amount: totalAmount,
            cardNumber: sanitizedCardNumber,
            expiryDate,
            cvv
        };

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/payment', paymentData);
            toast.success(response.data.message);
            // Ödəniş uğurla tamamlandıqdan sonra inputları sıfırlayırıq
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Ödəniş zamanı xəta baş verdi!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.paymentContainer}>
            <h2>Ödəniş Səhifəsi</h2>
            <p>Ümumi məbləğ: {totalAmount}$</p>
            <form onSubmit={handlePayment}>
                <input
                    type="text"
                    placeholder="Kart Nömrəsi"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Ödəniş edilir..." : "Ödəniş et"}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Payment;

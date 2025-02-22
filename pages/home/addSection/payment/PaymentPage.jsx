import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./PaymentPage.module.scss";
import { createPaymentIntentThunk } from "../../../../redux/reducers/paymentSlice";

// Stripe açarını yükləyirik
const stripePromise = loadStripe("pk_test_51QuzeY4Q6NZiWKpIOcdzFHN9LcJAbQqC1CthxYvBYeHpIT0IDJQStusR2BspKzM6H1U9Spp697aM0aRUuVyoVI7D00fPG56T5u");

// Checkout form komponenti
const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(total);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment successfully completed! ✅");
      navigate("/payment-success")
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className={style.amount}>
        <label htmlFor="amount">Total Amount:</label>
        <input
          type="string"
          id="amount"
          readOnly
          value={` ${amount} USD`}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
      <button className={style.payButton} disabled={!stripe || loading} style={{ marginTop: "20px" }}>
        {loading ? "Paid..." : `Pay $ ${total}`}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

const PaymentPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { total } = location.state;
  const { payment, loading, error } = useSelector((state) => state.payment);
  const [amount, setAmount] = useState(total);

  useEffect(() => {
    dispatch(createPaymentIntentThunk(amount * 100)); // Toplam tutar için intent yaradırıq (cent cinsinden)
  }, [dispatch, amount]);

  const options = payment ? { clientSecret: payment } : null;

  console.log("📢 payment value:", payment);  // 🔍 Debug

  return (
    <div className={style.section}>
      <div className={style.heading}>
        <h1>Payment Page</h1>
      </div>
      {loading && <p>Yüklənir...</p>}
      {error && <p style={{ color: "red" }}>Xəta: {error}</p>}
      {options && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm total={amount} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
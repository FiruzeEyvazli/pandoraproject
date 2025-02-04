import React from 'react'
import styles from "./Footer.module.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.onediv}>
            <div className={styles.div}>
            <div className={styles.pandora}>
                <div className={styles.join}>
                <span>Join</span>
                <img src="https://us.pandora.net/on/demandware.static/-/Sites-en-US-Library/default/dw7a170628/images/loyalty/images/myPandora.svg" alt="" />
                </div>
                <p>Join our rewards program today to earn points, get personal offers and enjoy exclusive benefits.</p>
            </div>
            <div className={styles.btn}>
            <button>JOIN NOW</button>
            </div>
            </div>
        </div>
        <div className={styles.twodiv}>
            <div className={styles.two}>
                <div className={styles.text}>
                    <h4>Shop</h4>
                    <p>New in</p>
                    <p>Charms & Bracelets</p>
                    <p>Rings</p>
                    <p>Earrings</p>
                    <p>Necklaces</p>
                </div>
                <div className={styles.text}>
                    <h4>Manage</h4>
                    <p>All services & Offerings</p>
                    <p>Basket</p>
                    <p>Wishlist</p>
                    <p>Register</p>
                    <p>Login</p>
                </div>
                <div className={styles.text}>
                    <h4>About Us</h4>
                    <p>About Pandora</p>
                    <p>Terms and Conditions</p>
                    <p>Cookie policy</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>

        <div className={styles.threediv}>
            <div>
                <p>© ALL RIGHTS RESERVED. 2025 Pandora</p>
            </div>
            <div className={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <AiFillTwitterCircle />
            <FaYoutube />
            <FaPinterest />
            </div>
        </div>
    </div>
  )
}

export default Footer
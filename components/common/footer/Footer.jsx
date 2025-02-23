import React from 'react'
import styles from "./Footer.module.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {

    const navigate =useNavigate()

    const goToCares = () => {
        navigate('/cares')
    }

    const goToPandoraAbout = () => {
        navigate('/about')
    }

    const goToTermsCon = () => {
        navigate('/termscon')
    }

    const goToBasket = () => {
        navigate('/basket')
    }

    const goToWishlist = () => {
        navigate('/wishlist')
    }

    const goToCharms = () => {
        navigate('/charms')
    }

    const goToBracelets = () => {
        navigate('/bracelet')
    }
    const goToRings = () => {
        navigate('/rings')
    }
    const goToNecklaces = () => {
        navigate('/necklaces')
    }
    const goToLogin = () => {
        navigate('/login')
    }
    const goToRegister = () => {
        navigate('/register')
    }
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
                        <button onClick={goToRegister}>JOIN NOW</button>
                    </div>
                </div>
            </div>
            <div className={styles.twodiv}>
                <div className={styles.two}>
                    <div className={styles.text}>
                        <h4>Shop</h4>
                        <p onClick={goToCharms}>Charms</p>
                        <p onClick={goToBracelets}>Bracelets</p>
                        <p onClick={goToRings}>Rings</p>
                        <p onClick={goToNecklaces}>Necklaces</p>
                    </div>
                    <div className={styles.text}>
                        <h4>Manage</h4>
                        <p onClick={goToCares}>Pandora Cares</p>
                        <p onClick={goToBasket}>Basket</p>
                        <p onClick={goToWishlist}>Wishlist</p>
                        <p onClick={goToLogin}>Login</p>
                    </div>
                    <div className={styles.text}>
                        <h4>About Us</h4>
                        <p onClick={goToPandoraAbout}>About Pandora</p>
                        <p onClick={goToTermsCon}>Terms and Conditions</p>
                        <p>Cookie policy</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
            </div>

            <div className={styles.threediv}>
                <div className={styles.three}>
                    <div>
                        <p>© ALL RIGHTS RESERVED. 2025 Pandora</p>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}><FaFacebook /></div>
                        <div className={styles.icon}><FaInstagram /></div>
                        <div className={styles.icon}><AiFillTwitterCircle /></div>
                        <div className={styles.icon}><FaYoutube /></div>
                        <div className={styles.icon}><FaPinterest /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
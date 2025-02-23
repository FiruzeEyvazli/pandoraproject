import React from 'react'
import styles from "./BlackSec.module.scss"
import { FaHeart } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { LuCreditCard } from "react-icons/lu";
import { IoReturnDownBackOutline } from "react-icons/io5";
const BlackSection = () => {
  return (
    <div className={styles.divSection}>
        <div className={styles.section}>
            <div className={styles.carts}>
            <div className={styles.cart}>
                <div className={styles.icon}>
            <FaHeart />
                </div>
            <span>My PANDORA</span>
            <p>Save 10% + earn points with your purchases.</p>
            </div>
            <div className={styles.cart}>
                <div className={styles.icon}>
            <GoPencil />
                </div>
            <span>Student Discount</span>
            <p>Eligible students save 10% with Student Beans or ID.me</p>
            </div>
            <div className={styles.cart}>
                <div className={styles.icon}>
            <LuCreditCard />
                </div>
            <span>Pandora Credit Card</span>
            <p>Open a Pandora Credit Card & Save 10% of your first qualifying purchase today.</p>
            </div>
            <div className={styles.cart}>
                <div className={styles.icon}>
            <IoReturnDownBackOutline />
                </div>
            <span>Free Returns</span>
            <p>Prepaid shipping label included with every order.</p>
            </div>

            </div>
        </div>
    </div>
  )
}

export default BlackSection
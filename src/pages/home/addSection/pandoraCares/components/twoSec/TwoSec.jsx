import React from 'react'
import styles from "./TwoSec.module.scss"
const TwoSec = () => {
  return (
    <div className={styles.divSection}>
        <div className={styles.section}>
            <div className={styles.header}>
                <p>Your jewelry is not only a beautiful accessory - it's a tangible reminder of the special moments in your life. We understand the value of these cherished pieces, which is why we offer Pandora Cares, a comprehensive protection plan that covers replacements and repairs for your jewelry.</p>
                <p>Our plan provides up to two years of coverage for eligible Pandora jewelry, and there are no service fees or hidden fees to worry about.*</p>
            </div>

            <div className={styles.cards}>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/Assurant%20Care_Ecomm_1000x1000_1?fmt=auto&qlt=80&" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>For Replacement</h2>
                            <p>Pandora Cares offers a one-time replacement for eligible jewelry items under $200 (excluding any discounts or taxes) at the time of purchase with a covered breakdown** or damage.***</p>
                        </div>
                        <button className={styles.btn}>Find a store</button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/aAssurant%20Care_Ecomm_1000x1000_2?fmt=auto&qlt=80&" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>Jewelry Repair</h2>
                            <p>Pandora Cares covers repairs, including all parts and labor charges, for eligible jewelry items with an advertised retail price of $200 and above (excluding any discounts or taxes) at the time of purchase with a covered breakdown** or damage.</p>
                        </div>
                        <button>Find a store</button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/Assurant%20Care_Ecomm_1000x1000_3?fmt=auto&qlt=80&" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>Manage My Account</h2>
                            <p>Pandora Cares coverage begins one year plus one day from the date of plan purchase and provides up to two years of coverage. Visit the Pandora Cares claims portal to view your plan details, including the terms and conditions, request service, file/track claims, and more.</p>
                        </div>
                        <button>Manage</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TwoSec
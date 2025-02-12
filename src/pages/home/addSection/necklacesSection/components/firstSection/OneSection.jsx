import React from 'react'
import styles from "./OneSection.module.scss"
const OneSection = () => {
  return (
    <div className={styles.divSection}>
        <div className={styles.section}>
            <div className={styles.imgBox}>
                <img src="https://cdn.media.amplience.net/i/pandora/Joselyn_Desktop_Mobile?" alt="" />
            </div>
            <div className={styles.texts}>
                <h1>BE INSPIRED. <br/> BE LOVE.</h1>
                <div>
                <h2>ENJOY</h2>
                <h3>25% OFF</h3>
                </div>
                <p>SITEWIDE & STOREWIDE*</p>

            </div>
        </div>
    </div>
  )
}

export default OneSection
import React from 'react'
import styles from "./OneSec.module.scss"
const OneSec = () => {
    window.scrollTo(0, 0);
  return (
    <div className={styles.section}>
        <div className={styles.imgBox}>
            <div className={styles.text}>
                <div className={styles.comment}>
                    <h2>ABOUT</h2>
                <p>Every day people around the world share facets of who they are and what matters to them through their Pandora jewellery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OneSec
import React from 'react'
import styles from "./FirstSec.module.scss"
const FirstSec = () => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.section}>
            <div className={styles.image}>
              
                    <div className={styles.text}>
                <h1>RINGS</h1>
                <p>Discover a statement piece in our rings collection. Explore our rings for women to find the perfect style for yourself or that special someone.</p>
                </div>
            </div>
            <div className={styles.pinkSection}>
                <h4>LIMITED TIME ONLY! <br/>
                25% OFF SITEWIDE</h4>
                <p>Learn more</p>
            </div>
        </div>
  )
}

export default FirstSec
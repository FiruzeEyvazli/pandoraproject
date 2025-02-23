import React from 'react'
import styles from "./TwoSec.module.scss"
const TwoSec = () => {
  return (
    <div className={styles.section}>
        <div className={styles.divContent}>
            <div className={styles.content}>
                <div className={styles.imgBox}>
                <img src="https://cdn.media.amplience.net/i/pandora/763622C01_RGB?fmt=auto&qlt=60&crop={14.05%},{13.5%},{70.85%},{72.35%}" alt="" />
                </div>
                <h4>CHARMS</h4>
            </div>
            <div className={styles.content}>
                <div className={styles.imgBox}>
                <img className={styles.braceletes} src="https://cdn.media.amplience.net/i/pandora/593655C01_RGB?fmt=auto&qlt=60&crop={0%},{0%},{99.85%},{100%}" alt="" />
                </div>
                <h3>BRACELETS</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.imgBox}>
                <img className={styles.rings} src="https://cdn.media.amplience.net/i/pandora/193100C01_RGB?fmt=auto&qlt=60&crop={0%},{0%},{100%},{100%}" alt="" />
                </div>
                <h3>RINGS</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.imgBox}>
                <img className={styles.earrings} src="https://cdn.media.amplience.net/i/pandora/293633C01_RGB?fmt=auto&qlt=60&" alt="" />
                </div>
                <h3>EARRINGS</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.imgBox}>
                <img src="https://cdn.media.amplience.net/i/pandora/793673C01_RGB?fmt=auto&qlt=60&crop={10.25%},{7.55%},{80.7%},{80.7%}" alt="" />
                </div>
                <h3>NEW ARRIVALS</h3>
            </div>
        </div>
    </div>
  )
}

export default TwoSec
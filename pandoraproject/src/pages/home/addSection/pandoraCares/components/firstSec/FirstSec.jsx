import React from 'react'
import styles from "./FirstSec.module.scss"
const FirstSec = () => {
    window.scrollTo(0, 0);
  return (
    <div className={styles.section}>
        <div className={styles.imgBox}>
        <img src="https://cdn.media.amplience.net/i/pandora/Assurant%20Care_Ecomm%20Hero%20Image_M37?crop={0%},{0%},{100%},{100%}&fmt=auto&qlt=80" alt="" />
        </div>
    </div>
  )
}

export default FirstSec
import React from 'react'
import styles from "./TwoSec.module.scss"
const TwoSec = () => {
  return (
    <div className={styles.divSection}>
        <div className={styles.section}>
            <div className={styles.texts}>
                <div className={styles.about}>
                    <h1>About</h1>
                    <p>Pandora designs, manufactures and markets hand-finished and contemporary jewellery made from high-quality materials at accessible price points.</p>
                </div>
                <div className={styles.history}>
                    <p>Pandora is the world's largest jewellery brand, specialising in the design, crafting and marketing of accessible luxury jewellery made from high-quality materials. Each piece is created to inspire self-expression, allowing people to share their stories and passions through meaningful jewellery. Pandora jewellery is sold in more than 100 countries through 6,800 points of sale, including more than 2,700 concept stores.</p>
                    <p>Headquartered in Copenhagen, Denmark, Pandora employs 37,000 people worldwide and crafts its jewellery using only recycled silver and gold. Pandora is committed to leadership in sustainability and has set out to halve greenhouse gas emissions across its value chain by 2030. Pandora is listed on the Nasdaq Copenhagen stock exchange and generated revenue of DKK 31.7 billion (EUR 4.2 billion) in 2024.</p>
                </div>
            </div>
            <div className={styles.twoSection}>
                <div className={styles.header}>
                    <h1><span>
                    Discover our latest styles
and step into our world of jewellery
on pandora.net.</span></h1>
                </div>
                <div className={styles.imgBox}>
                    <img src=" https://pandoragroup.com/-/media/images/about/pandora-motn-47.jpg-" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoSec
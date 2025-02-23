import React from 'react'
import styles from "./ForEvery.module.scss"
const ForEvery = () => {
    return (
        <div className={styles.divSection}>
            <div className={styles.section}>
                <div className={styles.header}>
                    <h1>For every special moment</h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/Q424_Holiday_Social_model_14_RGB?fmt=auto&qlt=80&crop={14.1%},{16.5%},{66.4%},{66.4%}" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>Get personal with engraving</h2>
                            <p>Make your piece one of a kind with a custom engraving - choose from fonts, symbols, drawings and more.</p>
                        </div>
                        <button className={styles.btn}>ENGRAVE YOURS</button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/Q224_D_PDP_Product_Styled_12_RGB?fmt=auto&qlt=80&crop={16.4%},{20.6%},{42.7%},{42.7%}" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>One ring leads to another</h2>
                            <p>And another. And another. Maximize your impact
                            with rings made for stacking</p>
                        </div>
                        <button>ENGRAVE YOURS</button>
                    </div>
                    <div className={styles.cart}>
                        <div className={styles.imgBox}>
                            <img src="https://cdn.media.amplience.net/i/pandora/Q424_G_PDP_Product_Styled_03_RGB?fmt=auto&qlt=80&crop={10.05%},{45.5%},{38.9%},{38.9%}" alt="" />
                        </div>
                        <div className={styles.texts}>
                            <h2>New and made for you</h2>
                            <p>Just dropped - our newest styles all in one place,
                            ready for you to find your next favorite.</p>
                        </div>
                        <button>ENGRAVE YOURS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForEvery
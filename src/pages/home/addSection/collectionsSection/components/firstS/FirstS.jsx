import React from 'react'
import styles from "./FirstS.module.scss"
const FirstS = () => {
  return (
    <div className={styles.divSection}>
        <div className={styles.section}>
            <div className={styles.header}>
                <h1>Pandora Collections</h1>
                <p>Step into the world of Pandora. Explore our diverse jewelry collections <br/> and discover a universe of possibilities to create a look that tells your story.</p>
            </div>
            <div className={styles.essence}>
                <div className={styles.texts}>
                    <h1>PANDORA <br/> ESSENCE</h1>
                    <p>Our new collection of sculptural jewelry <br/> is inspired by the free-flowing forms of <br/> nature. Connect to nature's elements: the beauty of organic shapes and <br/> sculptural contours, woven into modern <br/> jewelry that reflects what's unique <br/> about you.</p>
                    <button>SHOP NOW</button>
                </div>
                <div className={styles.imgBox}>
                    <img src="https://cdn.media.amplience.net/i/pandora/Q224_D_PDP_Product_Styled_19_RGB_Resized_50-50?fmt=auto&qlt=80&crop={10.23%},{6.57%},{54%},{69.86%}" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstS
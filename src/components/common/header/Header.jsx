import React from 'react'
import styles from './Header.module.scss'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className={styles.header}>
            <div className={styles.join}>
                <p>FREE IN-STORE PICKUP Within 2 hours.</p>
            </div>
            <div className={styles.headerMain}>
                <div className={styles.functions}>
                    <div className={styles.logo}>
                        <img src="https://nebula-cdn.kampyle.com/wu/619648/resources/image/1578337582571_Pandora_Logo_Black_RGB_Web_200x80@1x.png" alt="" />
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.icon}><IoMdHeartEmpty /></div>
                        <div className={styles.icon}><IoLocationOutline /></div>
                        <div className={styles.icon}> <FiUser /></div>
                        <div className={styles.icon}><IoBagOutline /></div>
                    </div>



                    <div className={styles.navbar}>
                        <button onClick={toggleDrawer}><RxHamburgerMenu /></button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='bla bla bla'
                        >
                            <div className={styles.navcontent}>
                                <ul>
                                    <li><a href=""><FiUser /> User</a></li>
                                    <li><a href=""></a><IoMdHeartEmpty /> Wishlist</li>
                                    <li><a href=""><IoLocationOutline /> Find Stores</a></li>
                                    <li><a href="">New in</a></li>
                                    <li><a href="">Charms&Bracelets</a></li>
                                    <li><a href="">Rings</a></li>
                                    <li><a href="">Earrings</a></li>
                                    <li><a href="">Necklaces</a></li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </div>

            </div>
            <div className={styles.content}>
                <ul>
                    <li><a href="">New in</a></li>
                    <li><a href="">Charms&Bracelets</a></li>
                    <li><a href="">Rings</a></li>
                    <li><a href="">Earrings</a></li>
                    <li><a href="">Necklaces</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Header
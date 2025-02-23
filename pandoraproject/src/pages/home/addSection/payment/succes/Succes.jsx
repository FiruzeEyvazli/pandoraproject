import React from 'react'
import styles from "./Succes.module.scss"
import { FaRegCheckCircle } from "react-icons/fa";
const Succes = () => {
  return (
    <div className={styles.succes}>
        <h1>Payment <br/> successfully completed! <FaRegCheckCircle /></h1>
    </div>
  )
}

export default Succes
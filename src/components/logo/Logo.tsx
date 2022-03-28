import { FC } from 'react'
import logo from '../../img/logo.jpg'
import styles from "./logo.module.scss"

export const Logo:FC = () => {
  return (
	<img src={logo} alt="" className={styles.logo}/>
  )
}

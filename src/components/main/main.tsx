import { FC } from "react"
import styles from "./main.module.scss"
import shoes from "../../img/shoes.jpg"

export const Main:FC = () => {
	return <div className={styles.main}>
		<img src={shoes} alt="shoes" className={styles.img}/>
	</div>
}
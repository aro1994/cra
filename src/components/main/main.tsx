import { FC } from "react"
import { Profile } from "../../pages/profile/profile"
import styles from "./main.module.scss"



export const Main:FC = () => {
	return <div className={styles.main}>
		<Profile/>
	</div>
}
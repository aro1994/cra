import { FC } from "react";
import shoes from "../../img/shoes.jpg"
import styles from "./profile.module.scss"


export const Profile:FC = ()=>{
	return <div>
		<img src={shoes} alt="shoes" className={styles.img}/>
	</div>

}
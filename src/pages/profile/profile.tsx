import { FC } from "react";
import { Avatar } from "../../components/avatar/Avatar";
import { Message } from "../../components/message/Message";
import { Post } from "../../components/post/Post";
import shoes from "../../img/shoes.jpg"
import styles from "./profile.module.scss"


export const Profile:FC = ()=>{
	return <div className={styles.profile}>
		<img src={shoes} alt="shoes" className={styles.img}/>
		<Avatar/>
		<Message/>
		<Post/>
		<Post/>
		<Post/>
		<Post/>

	</div>

}
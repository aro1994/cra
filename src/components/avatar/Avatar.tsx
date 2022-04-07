import styles from "./avatar.module.scss"
import avatar from "../../img/5f58d47aae82fc11897894fcb9a044f2d64d2cd0f.jpg-resize.jpg"

export const Avatar = ()=>{
	return <div className={styles.avatar}>
		<img className={styles.img} src={avatar} alt="" />
		<div>
			<h3 className={styles.title}>avatar</h3>
			<p>avatar is a nice animation film</p>
		</div>
	</div>
}
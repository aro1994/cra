import styles from "./post.module.scss"
import imgs from "../../img/5f58d47aae82fc11897894fcb9a044f2d64d2cd0f.jpg-resize.jpg"

export const Post =()=>{
	return <div className={styles.post}>
		<img className={styles.img} src={imgs} alt="" />
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae tenetur vel distinctio harum natus sint placeat doloribus, optio corporis saepe officia? Aliquid soluta omnis ut nostrum illo quasi nesciunt.</p>
	</div>

}
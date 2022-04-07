import styles from "./message.module.scss"

export const Message = () => {
  return (
	<div className={styles.wrapper}>
		<input type="text" />
		<button>send</button>
	</div>
  )
}

import React, { FC } from 'react'
import { Logo } from '../logo/Logo'
import styles from "./header.module.scss"

export const Header:FC = () => {
  return (
	<header className={styles.header}>
		<Logo/>
	</header>
  )
}

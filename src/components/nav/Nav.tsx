import { FC } from "react"
import { NavItem } from "./nav-item/NavItem"
import styles from "./nav.module.scss"

export const Nav:FC = () => {
  return (
	<ul className={ styles.nav }>
		<NavItem>
		<a href="#">Product</a>	
		</NavItem>
		<NavItem> 
			<a href="#">About Us</a>
			</NavItem>
		<NavItem>
			<a href="#">Map</a>
		</NavItem>
		<NavItem>
			<a href="#">Sale</a>
		</NavItem>
	</ul>
  )
  
}

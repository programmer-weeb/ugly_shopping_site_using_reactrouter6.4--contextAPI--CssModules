import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import styles from './modules/MainNav.module.css'

function MainNavWillBeInAllPages() {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Here are some links =========>>>>>>>>>>>></h3>
			<Link to="/shopping" className={styles.link}>
				Shopping
			</Link>
			<br />
			<Link to="/home" className={styles.link}>
				Home
			</Link>
			<br />
			<Link to="/" className={styles.link}>
				Home /
			</Link>
		</div>
	)
}

export default MainNavWillBeInAllPages

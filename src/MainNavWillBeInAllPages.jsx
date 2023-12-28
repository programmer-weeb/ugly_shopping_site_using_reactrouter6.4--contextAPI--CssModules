import { Link } from 'react-router-dom'
import styles from './modules/MainNav.module.css'
import { useContext } from 'react'
import { AddedToCartItemsContext } from './contexts/AddedToCartItemsContext'

function MainNavWillBeInAllPages() {

	const contextData = useContext(AddedToCartItemsContext)

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>
				Here are some links ========={'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}{'>'}
			</h3>
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

			<Link to="/cart" className={styles.link}>
				{' '}
				cart{' '}
				<span
					style={{
						color: 'red',
					}}
				>
					{contextData.addedToCartItems.length}
				</span>{' '}
			</Link>
		</div>
	)
}

export default MainNavWillBeInAllPages

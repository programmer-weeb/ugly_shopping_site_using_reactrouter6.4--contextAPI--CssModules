import PropTypes from 'prop-types'
import CartItem from './CartItem' // Assuming you have a CartItem component

const CartPage = ({ cartItems }) => {
	return (
		<div>
			<h2>Your Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<ul>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</ul>
			)}
		</div>
	)
}

CartPage.propTypes = {
	cartItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired,
		})
	).isRequired,
}

export default CartPage

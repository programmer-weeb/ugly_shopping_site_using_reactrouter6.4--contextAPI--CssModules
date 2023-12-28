import PropTypes from 'prop-types'

const CartItem = ({ id, title, price, quantity, total }) => {
	return (
		<li>
			<div>
				<h3>{title}</h3>
				<p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${total}</p>
			</div>
		</li>
	)
}

CartItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
}

export default CartItem

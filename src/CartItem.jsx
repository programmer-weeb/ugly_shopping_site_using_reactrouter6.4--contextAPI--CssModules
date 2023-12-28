import PropTypes from 'prop-types'

const CartItem = ({ title, price, quantity, total, image }) => {
	return (
		<li>
			<div>
				<h3>{title}</h3>
				<img
					src={image}
					alt={title || 'falback alt for img'}
					style={{
						width: '100px',
						height: '100px',
					}}
				/>
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
	total: PropTypes.number.isRequired,
	image: PropTypes.string,
}

export default CartItem

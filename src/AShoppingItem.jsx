import PropTypes from 'prop-types'
// import styles from './modules/AShoppingItem.module.css'
import styles from './modules/ProductCard.module.css'
import { useState } from 'react'
export default function AShoppingItem({
	id,
	title,
	price,
	description,
	category,
	image,
	rating,
}) {
	const [quantity, setQuantity] = useState(1)

	const handleIncrement = () => {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1)
		}
    }
    
    const handleAddToCart = () => {
        console.log('Add to cart')
        // TODO: Add to cart
        // send to cart component in a form of an object
        
    }

	return (
		<div className={styles.productCard}>
			<img src={image} alt={title} className={styles.productImage} />
			<div className={styles.productInfo}>
				<h2>{title}</h2>
				<p>{description}</p>
				<p>Price: ${price}</p>
				<div className={styles.quantityControl}>
					<button onClick={handleDecrement}>-</button>
					<input type="number" value={quantity} readOnly />
					<button onClick={handleIncrement}>+</button>
				</div>
				<button className={styles.addToCartButton}>Add to Cart</button>
			</div>
		</div>
	)
}

AShoppingItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string,
	image: PropTypes.string,
	rating: PropTypes.shape({
		rate: PropTypes.string,
		count: PropTypes.number,
	}),
}

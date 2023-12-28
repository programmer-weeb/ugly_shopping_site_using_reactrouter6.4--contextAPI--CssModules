import PropTypes from 'prop-types'
// import styles from './modules/AShoppingItem.module.css'
import styles from './modules/ProductCard.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { AddedToCartItemsContext } from './contexts/AddedToCartItemsContext'
export default function AShoppingItem({
	id,
	title,
	price,
	description,
	image,
}) {
    const [quantity, setQuantity] = useState(0)
    const contextData = useContext(AddedToCartItemsContext)
    

	const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
        
	}

	const handleDecrement = () => {
		if (quantity > 0) {
			setQuantity((prevQuantity) => prevQuantity - 1)
		}
    }
    
    const handleAddToCart = () => {
        
        contextData.setAddedToCartItems((prevAddedToCartItems) => {
            return [...prevAddedToCartItems,  {id, quantity, title, total: price * quantity, price}]
        })

        setQuantity(1)
        
        
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
					<input type="number" value={quantity -1} readOnly />
					<button onClick={handleIncrement}>+</button>
				</div>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
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

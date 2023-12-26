import PropTypes from 'prop-types'
import styles from './modules/AShoppingItem.module.css'
export default function AShoppingItem({
	id,
	title,
	price,
	description,
	category,
	image,
	rating,
}) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
			<p className={styles.price}>Price: ${price}</p>
			{category && (
				<p className={styles.category}>Category: {category}</p>
			)}
			{image && <img src={image} alt={title} className={styles.image} />}
			{rating && (
				<div className={styles.ratingContainer}>
					<p className={styles.rating}>Rating: {rating.rate}</p>
					<p className={styles.rating}>Count: {rating.count}</p>
				</div>
			)}
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

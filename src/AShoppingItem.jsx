import PropTypes from 'prop-types'
export default function AShoppingItem() {
	return <div>AShoppingItem</div>
}

AShoppingItem.propTypes = {
	id: PropTypes.number.isRequired,
	tittle: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string,
	image: PropTypes.string,
	rating: PropTypes.shape({
		rate: PropTypes.string,
		count: PropTypes.number,
	}),
}

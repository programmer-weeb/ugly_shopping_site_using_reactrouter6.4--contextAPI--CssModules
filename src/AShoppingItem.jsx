import PropTypes from 'prop-types'
export default function AShoppingItem({
    id,
	tittle,
	price,
	description,
	category,
	image,
	rating,
}) {
	return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            width: '300px',
            height: '300px',
            margin: '10px',
            padding: '10px',

        }}>
			{/* make a card for each shopping item */}
			<h3>{tittle} id: {id} </h3>
			<p>{price}</p>
			<p>{description}</p>
			<p>{category}</p> <br />
            <img src={image} alt={tittle} style={{ 
                height: '100px',
                width: '100px',
            }} /> <br /> <br />
			<div className="rating">
				<p>rating rate: {rating.rate}</p>
				<p>count of rating: {rating.count}</p>
			</div>
		</div>
	)
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

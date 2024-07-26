import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { useContext } from 'react'
import { AddedToCartItemsContext } from './contexts/AddedToCartItemsContext'

const CartPage = ({ cartItems }) => {
  const { setAddedToCartItems } = useContext(AddedToCartItemsContext)

  function clearCart() {
    setAddedToCartItems([])
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <button onClick={clearCart}>Clear Cart</button>
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

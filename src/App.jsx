import { RouterProvider } from 'react-router-dom'
import { AddedToCartItemsContext } from './contexts/AddedToCartItemsContext'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Home'
import Shopping, { shoppingLoader } from './Shopping'
import ProductPage, { productPageLoader } from './ProductPage'
import CartPage from './CartPage'
import { useState } from 'react'

export default function App() {
  const [addedToCartItems, setAddedToCartItems] = useState([])

  return (
    <>
      <AddedToCartItemsContext.Provider
        value={{
          addedToCartItems: addedToCartItems,
          setAddedToCartItems: setAddedToCartItems,
        }}
      >
        <RouterProvider
          router={createBrowserRouter([
            {
              path: '/',
              element: <RootLayout />,
              children: [
                { index: true, element: <Home /> },
                { path: 'home', element: <Home /> },
                {
                  path: 'shopping',
                  element: <Shopping />,
                  loader: shoppingLoader,
                },
                {
                  path: 'shopping/:productId',
                  element: <ProductPage />,
                  loader: productPageLoader,
                },
                {
                  path: 'cart',
                  element: <CartPage cartItems={addedToCartItems} />,
                },
              ],
            },
          ])}
        />
      </AddedToCartItemsContext.Provider>
    </>
  )
}

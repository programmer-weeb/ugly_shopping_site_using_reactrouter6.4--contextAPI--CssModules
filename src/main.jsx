import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Shopping, { shoppingLoader } from './Shopping'
import ProductPage, { productPageLoader } from './ProductPage'
import RootLayout from './RootLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
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
					],
				},
			])}
		/>
	</React.StrictMode>
)

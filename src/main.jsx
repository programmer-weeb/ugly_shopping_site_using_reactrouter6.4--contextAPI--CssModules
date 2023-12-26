import React from 'react'
import ReactDOM from 'react-dom/client'
import MainNavWillBeInAllPages from './MainNavWillBeInAllPages.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Shopping, { shoppingLoader } from './Shopping'
import ProductPage from './ProductPage'
import { redirect } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
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
						},
					],
				},
			])}
		/>
	</React.StrictMode>
)

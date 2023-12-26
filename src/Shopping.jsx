import { useLoaderData } from 'react-router-dom'

export default function Shopping() {
	const loaderDataFromFakeAPI = useLoaderData()
	return (
		<div>
			<h1>Shopping</h1>
			{/* {loaderData && <h4>{JSON.stringify(loaderData)}</h4>} */}
			<ul>
				{loaderDataFromFakeAPI.map((element) => (
					<li key={element.id}>{JSON.stringify(element)}</li>
				))}
			</ul>
		</div>
	)
}

export async function shoppingLoader(loaderFunctionParams) {
	return await (await fetch('https://fakestoreapi.com/products')).json()

	// return (await fetch('')).json()
	// return {
	// 	name: 'shoppingLoader',
	//     data: 'shopping loader data ',
	//     loaderFunctionParams
	// }
}

// AShoppingItem
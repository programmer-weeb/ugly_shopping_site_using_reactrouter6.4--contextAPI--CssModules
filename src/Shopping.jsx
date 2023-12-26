import { useLoaderData } from 'react-router-dom'
import AShoppingItem from './AShoppingItem'
import { useNavigate } from 'react-router-dom'

export default function Shopping() {
    const loaderDataFromFakeAPI = useLoaderData()
    const navigate = useNavigate()

	return (
		<div>
			<h1>Shopping</h1> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
			{/* {loaderData && <h4>{JSON.stringify(loaderData)}</h4>} */}
			<ul
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					listStyleType: 'none',
					padding: '0',
				}}
			>
				{loaderDataFromFakeAPI.map((element) => (
                    <div key={element.id} onClick={() => {
                        console.log(element.id)
                        navigate(`/shopping/${element.id}`)
                    }}>
						<AShoppingItem  {...element} /> <br />
					</div>
				))}
			</ul>
		</div>
	)
}

export async function shoppingLoader(loaderFunctionParams) {
	return await (await fetch('https://fakestoreapi.com/products')).json()
}

import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AShoppingItem from './AShoppingItem'

export default function ProductPage() {
  const paramsObj = useParams()
  const loaderData = useLoaderData()

  return (
    <div>
      <h1>ProductPage</h1>
      {paramsObj && JSON.stringify(paramsObj)}
      {/* {loaderData && JSON.stringify(loaderData)} */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <AShoppingItem {...loaderData} />
    </div>
  )
}


async function getASingleProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}

export async function productPageLoader(loaderFunctionParams) {
  const { productId } = loaderFunctionParams.params
  return await getASingleProduct(productId)
}
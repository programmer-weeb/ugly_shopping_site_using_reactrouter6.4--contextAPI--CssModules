import { useParams } from 'react-router-dom'

export default function ProductPage() {
	const paramsObj = useParams()

	return (
		<div>
			<h1>ProductPage</h1>
			{paramsObj && JSON.stringify(paramsObj)}
		</div>
	)
}

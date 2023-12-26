import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function MainNavWillBeInAllPages() {

	return (
		<>
            <h3>here are some links</h3>
            <Link to='shopping'>Shopping</Link> <br />
            <Link to='home'>Home</Link> <br />
            <Link to='/'>Home /</Link>
            
		</>
	)
}

export default MainNavWillBeInAllPages

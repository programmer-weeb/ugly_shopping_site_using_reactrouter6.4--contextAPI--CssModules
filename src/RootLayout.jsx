import { Outlet } from 'react-router-dom'
import MainNavWillBeInAllPages from './MainNavWillBeInAllPages'

export default function RootLayout() {
	return (
		<div>
			<MainNavWillBeInAllPages />
			<Outlet />
		</div>
	)
}

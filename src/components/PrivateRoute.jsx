import { useSelector } from 'react-redux'
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirectTo = '/register' }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const isRefreshing = useSelector(selectIsRefreshing)

	if (isRefreshing) {
		return null
	}

	return isLoggedIn ? Component : <Navigate to={redirectTo} />
}

export default PrivateRoute

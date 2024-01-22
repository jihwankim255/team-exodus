import { useEffect } from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('isLoggedIn')
  const userLogin = !(user === '' || user === null)
  const location = useLocation()
  useEffect(() => {
    console.log('PrivateRoute rendered')
    if (!userLogin) {
      alert('로그인이 필요합니다')
    }
  }, [userLogin])

  return userLogin ? children : <Navigate to="/" state={{ from: location }} />
}

export default PrivateRoute

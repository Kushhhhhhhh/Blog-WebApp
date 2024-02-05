import { useDispatch } from "react-redux"
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {  dispatch(logout())
        })
    }
  return (
    <button 
    className="inline-block px-6 py-2 duration-200 bg-purple-700 rounded-lg hover:bg-purple-800 hover:font-bold  text-white" 
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn
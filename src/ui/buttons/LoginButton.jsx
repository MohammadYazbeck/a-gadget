import { useDispatch } from 'react-redux'
import { toggleShowAuth } from '../../features/user/authSlice'

export default function LoginButton() {
    const dispatch = useDispatch()
    return (
        <button
            onClick={() => dispatch(toggleShowAuth())}
            className="h ml-4 h-8 w-24 rounded-full border border-gray-600 font-semibold hover:border-red-400 hover:text-red-400 sm:h-9 sm:text-lg"
        >
            Login
        </button>
    )
}

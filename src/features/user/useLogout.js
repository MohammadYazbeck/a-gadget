import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearAuth } from './authSlice'
import { clearUser } from './userSlice'
import { clearCart } from '../cart/cartSlice'
import { toast } from 'react-hot-toast'

export function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()

    const {
        mutate: logout,
        status,
        error,
    } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries()
            navigate('/', { replace: true })
            dispatch(clearAuth())
            dispatch(clearUser())
            dispatch(clearCart())
        },
    })

    if (error) toast.error('ERROR: ', error)

    return { logout, status }
}

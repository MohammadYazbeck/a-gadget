import { useSelector, useDispatch } from 'react-redux'
import {
    getTotalCartItems,
    getTotalCartPrice,
    getTotalCartQuantity,
} from './cartSlice'
import { toggleShowAuth } from '../user/authSlice'
import { useNavigate } from 'react-router-dom'

export default function useCartDetails(closeDrawer) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const totalItmes = useSelector(getTotalCartItems)
    const totalQuantity = useSelector(getTotalCartQuantity)
    const totalPrice = useSelector(getTotalCartPrice)

    function handleClickOrder() {
        if (!isAuthenticated) dispatch(toggleShowAuth())
        if (isAuthenticated) {
            navigate('/order/new')
            closeDrawer()
        }
    }

    return { totalItmes, totalQuantity, totalPrice, handleClickOrder }
}

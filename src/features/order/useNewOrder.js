import { useSelector, useDispatch } from 'react-redux'
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice'
import { useState, useCallback } from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { placeNewOrder } from '../../services/apiOrder'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../user/userSlice'

export function useNewOrder(fullname, address, phone) {
    const items = useSelector(getCart)
    const totalPrice = useSelector(getTotalCartPrice)
    const user = useSelector(getUser)
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState({
        fullname: '',
        address: '',
        phone: '',
    })

    const {
        mutate: submitOrder,
        status,
        error,
    } = useMutation({
        mutationFn: placeNewOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orders'] })
            toast.success('Your order has been placed successfully')
            dispatch(clearCart())
            navigate('/orders')
        },
        onError: (err) => {
            toast.error(err.message)
            console.error('Order placement error:', err)
        },
    })
    if (error) toast.error('ERROR: ', error)

    // Validation functions
    const validateFullname = useCallback((name) => {
        if (!name) return 'Full name is required.'
        if (name.length < 5)
            return 'Full name must be at least 5 characters long.'
        return ''
    }, [])

    const validateAddress = useCallback((addr) => {
        if (!addr) return 'Address is required.'
        if (addr.length < 10)
            return 'Address must be at least 10 characters long.'
        return ''
    }, [])

    const validatePhone = useCallback((number) => {
        const phoneRegex = /^[0-9]{9,15}$/
        if (!number) return 'Phone number is required.'
        if (!phoneRegex.test(number))
            return 'Enter a valid phone number (10-15 digits).'
        return ''
    }, [])

    // Handle input changes
    const handleInputChange = useCallback((e, validator, setter) => {
        const value = e.target.value
        setter(value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: validator(value),
        }))
    }, [])

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault()

        const fullnameError = validateFullname(fullname)
        const addressError = validateAddress(address)
        const phoneError = validatePhone(phone)

        if (fullnameError || addressError || phoneError) {
            setErrors({
                fullname: fullnameError,
                address: addressError,
                phone: phoneError,
            })
            return
        }

        // Placing new Order
        const newOrder = {
            userId: user.userid,
            fullname,
            address,
            phone,
            items,
            totalPrice,
        }

        submitOrder(newOrder)
        console.log('Form submitted:', { fullname, address, phone })
    }

    return {
        items,
        totalPrice,
        errors,
        handleInputChange,
        handleSubmit,
        validateAddress,
        validateFullname,
        validatePhone,
        status,
    }
}

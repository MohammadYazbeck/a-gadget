import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../../services/supabase'
import { setAuthenticated, toggleShowAuth } from './authSlice'
import { setUserId } from './userSlice'

export default function useCheckAuth() {
    const dispatch = useDispatch()
    const isAuthShown = useSelector((state) => state.auth.showAuth)

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_IN' && session) {
                    dispatch(setAuthenticated(true))
                    dispatch(setUserId(session.user.id))

                    if (isAuthShown) {
                        dispatch(toggleShowAuth())
                    }
                } else if (event === 'SIGNED_OUT') {
                    dispatch(setAuthenticated(false))
                    dispatch(setUserId(null)) // Clear user ID on sign out
                }
            }
        )

        // Cleanup on unmount
        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [dispatch, isAuthShown])
}

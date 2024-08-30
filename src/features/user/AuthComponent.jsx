import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../../services/supabase'
import { toggleShowAuth } from './authSlice'
import { useDispatch } from 'react-redux'

export default function AuthComponenet() {
    const dispatch = useDispatch()

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60">
            <div
                onClick={() => dispatch(toggleShowAuth())}
                className="absolute inset-0"
            ></div>
            <div className="relative z-40 flex h-full max-h-[38rem] w-full max-w-[30rem] items-center justify-center rounded-lg bg-white">
                <div className="w-[22rem]">
                    <Auth
                        providers={['google']}
                        supabaseClient={supabase}
                        appearance={{
                            theme: ThemeSupa,
                            variables: {
                                default: {
                                    colors: {
                                        brand: '#e53935',
                                        brandButtonText: '#fafafa',
                                        brandAccent: '#ef5350',
                                        defaultButtonBackground: '#fafafa',
                                        defaultButtonBackgroundHover: '#ffebee',
                                    },
                                    radii: {
                                        borderRadiusButton: '15px',
                                        buttonBorderRadius: '15px',
                                        inputBorderRadius: '15px',
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

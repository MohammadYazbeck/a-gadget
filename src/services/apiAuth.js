import supabase from './supabase'

export async function logout() {
    const { error } = await supabase.auth.signOut()
    await supabase.auth.setSession({})

    if (error) {
        console.error('Error logging out:', error)
    }
}

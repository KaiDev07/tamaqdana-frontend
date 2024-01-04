import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { URL } from '../App'

export const useSignup = () => {
    const [error1, setError] = useState(null)
    const [isLoading1, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setIsLoading(false)

            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })
        }
    }

    return { error1, isLoading1, signup }
}

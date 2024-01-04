import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { URL } from '../App'

export const useLogin = () => {
    const [error2, setError] = useState(null)
    const [isLoading2, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password, checked) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${URL}/login`, {
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

            if (checked) {
                localStorage.setItem('user', JSON.stringify(json))
            }

            dispatch({ type: 'LOGIN', payload: json })
        }
    }

    return { error2, isLoading2, login }
}

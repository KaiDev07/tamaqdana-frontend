import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import api from '../http/api'

export const useLogin = () => {
    const [isLoading2, setIsLoading2] = useState(false)
    const [error2, setError2] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        try {
            setIsLoading2(true)
            setError2(null)

            const response = await api.post('/user/login', { email, password })
            console.log(response)

            setIsLoading2(false)

            localStorage.setItem('token', response.data.accessToken)

            dispatch({
                type: 'LOGIN',
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading2(false)
            setError2(error.response.data.error)
            console.log(error.response.data.error)
        }
    }

    return { isLoading2, error2, login }
}

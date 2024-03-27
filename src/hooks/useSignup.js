import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import api from '../http/api'

export const useSignup = () => {
    const [isLoading1, setIsLoading1] = useState(false)
    const [error1, setError1] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        try {
            setIsLoading1(true)
            setError1(null)

            const response = await api.post('/user/registration', {
                email,
                password,
            })
            console.log(response)

            setIsLoading1(false)

            localStorage.setItem('token', response.data.accessToken)

            dispatch({
                type: 'LOGIN',
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading1(false)
            setError1(error.response.data.error)
            console.log(error.response.data.error)
        }
    }

    return { isLoading1, error1, signup }
}

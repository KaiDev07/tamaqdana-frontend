import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import api from '../http/api'

export const useCheckAuth = () => {
    const [isLoading4, setIsLoading4] = useState(false)
    const { dispatch } = useAuthContext()

    const checkAuth = async () => {
        try {
            setIsLoading4(true)
            const response = await api.get('/user/refresh')
            console.log(response)
            setIsLoading4(false)
            localStorage.setItem('token', response.data.accessToken)
            dispatch({
                type: 'LOGIN',
                payload: response.data.user,
            })
        } catch (error) {
            setIsLoading4(false)
            console.log(error.response.data.error)
        }
    }

    return { isLoading4, checkAuth }
}
